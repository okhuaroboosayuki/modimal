import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { updateCartItemQuantity } from "../../services/apiCart";

export default function useUpdateCartItemQuantity() {
  const queryClient = useQueryClient();

  const { mutate: updateItemQuantity, isPending: isUpdating } = useMutation({
    mutationFn: updateCartItemQuantity,
    onMutate: async (product) => {
      await queryClient.cancelQueries(["cart"]);

      const previousCart = queryClient.getQueryData(["cart"]);

      queryClient.setQueryData(["cart"], (old) => ({
        ...old,
        data: old.data.map((item) =>
          item.product_id === product.product_id &&
          item.selected_size === product.selected_size &&
          item.selected_color === product.selected_color
            ? { ...item, quantity: product.quantity }
            : item,
        ),
      }));

      return { previousCart };
    },
    onError: (error, _, context) => {
      queryClient.setQueryData(["cart"], context.previousCart);
      toast.error(error.message);
    },
    onSettled: () => queryClient.invalidateQueries(["cart"]),
  });

  return { updateItemQuantity, isUpdating };
}
