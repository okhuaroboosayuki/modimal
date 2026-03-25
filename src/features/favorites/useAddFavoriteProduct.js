import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { addFavoriteProduct } from "../../services/apiProducts";

export function useAddFavoriteProduct() {
  const queryClient = useQueryClient();

  const { mutate: addToFavorites, isPending: isLoading } = useMutation({
    mutationFn: addFavoriteProduct,
    onMutate: async (newFavorite) => {
      await queryClient.cancelQueries(["favorite products"]);

      const previousFavorites = queryClient.getQueryData(["favorite products"]);

      queryClient.setQueryData(["favorite products"], (old) => {
        if (!old) return old;

        return {
          ...old,
          data: [
            ...old.data,
            {
              user_id: newFavorite.userId,
              product_id: newFavorite.productId,
            },
          ],
        };
      });

      return { previousFavorites };
    },
    onSuccess: () => {
      toast.success("Added to favorites");
    },
    onError: (error) => {
      toast.error(error.message);
    },
    onSettled: () => {
      queryClient.invalidateQueries(["favorite products"]);
    },
  });

  return { isLoading, addToFavorites };
}
