import { useMutation, useQueryClient } from "@tanstack/react-query";
import { updateCartColorOrSize } from "../../services/apiCart";
import toast from "react-hot-toast";

export default function useUpdateColorOrSize() {
  const queryClient = useQueryClient();

  const { mutate: updateColorOrSize, isPending: isUpdatingColorOrSize } =
    useMutation({
      mutationFn: updateCartColorOrSize,
      onMutate: async (product) => {
        await queryClient.cancelQueries(["cart"]);

        const previousCart = queryClient.getQueryData(["cart"]);

        queryClient.setQueryData(["cart"], (old) =>
          ({
            ...old,
            data: old.data.map((item) => {
              if (item.product_id !== product.product_id) return item;

              const colorChanged =
                product.selected_color &&
                item.selected_color !== product.selected_color;
              const sizeChanged =
                product.selected_size &&
                item.selected_size !== product.selected_size;

              return {
                ...item,
                ...(sizeChanged && { selected_size: product.selected_size }),
                ...(colorChanged && { selected_color: product.selected_color }),
              };
            }),
          }));

        return { previousCart };
      },
      onSuccess: (_, product) => {
        toast.success(
          product.selected_color ? "Color updated" : "Size updated",
        );
      },
      onError: (error, _, context) => {
        queryClient.setQueryData(["cart"], context.previousCart);
        toast.error(error.message);
      },
      onSettled: () => queryClient.invalidateQueries(["cart"]),
    });

  return { updateColorOrSize, isUpdatingColorOrSize };
}
