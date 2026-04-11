import { useMutation, useQueryClient } from "@tanstack/react-query";
import { removeFromCart } from "../../services/apiCart";
import toast from "react-hot-toast";

export function useRemoveFromCart() {
  const queryClient = useQueryClient();

  const { mutate: removeItemFromCart, isPending: isRemoving } = useMutation({
    mutationFn: removeFromCart,
    onMutate: async (product) => {
      await queryClient.cancelQueries(["cart"]);

      // save snapshot
      const previousCart = queryClient.getQueryData(["cart"]);

      // update cache by filtering out product not meeting criteria
      queryClient.setQueryData(["cart"], (old = []) =>
        old.filter(
          (item) =>
            !(
              item.product_id === product.product_id &&
              item.selected_size === product.selected_size &&
              item.selected_color === product.selected_color
            ),
        ),
      );

      // return snapshot for onError context
      return { previousCart };
    },
    onSuccess: () => toast.success("Item removed from cart"),
    onError: (error, _, context) => {
      // if error, roll back to previous cache data before mutation occurred
      queryClient.setQueryData(["cart"], context.previousCart);
      toast.error(error.message);
    },
    onSettled: () => queryClient.invalidateQueries(["cart"]),
  });

  return { removeItemFromCart, isRemoving };
}
