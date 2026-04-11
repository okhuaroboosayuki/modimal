import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { addToCart } from "../../services/apiCart";

export function useAddToCart() {
  const queryClient = useQueryClient();

  const { mutate: addItemToCart, isPending: isAdding } = useMutation({
    mutationFn: addToCart,
    onMutate: async (newItem) => {
      await queryClient.cancelQueries(["cart"]);

      // save a snapshot of previous data for if/when mutation fails
      const previousCart = queryClient.getQueryData(["cart"]);

      //  update cache with new product without waiting for server
      queryClient.setQueryData(["cart"], (old = []) => {
        // append to array as new
        return [
          ...old,
          {
            product_id: newItem.product_id,
            quantity: newItem.quantity,
            selected_size: newItem.selected_size,
            selected_color: newItem.selected_color,
          },
        ];
      });

      // return snapshot for onError context
      return { previousCart };
    },
    onSuccess: () => toast.success("Item added to cart"),
    onError: (error, _, context) => {
      // if error, roll back to previous cache data before mutation occurred
      queryClient.setQueryData(["cart"], context.previousCart);
      toast.error(error.message);
    },
    // refetch to ensure cache reflects true server state
    onSettled: () => queryClient.invalidateQueries(["cart"]),
  });

  return { addItemToCart, isAdding };
}
