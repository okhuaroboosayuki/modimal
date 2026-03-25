import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { removeFavoriteProduct } from "../../services/apiProducts";

export function useRemoveFavoriteProduct() {
  const queryClient = useQueryClient();

  const { mutate: removeFromFavorites, isPending: isLoading } = useMutation({
    mutationFn: removeFavoriteProduct,
    onMutate: async ({ productId }) => {
      await queryClient.cancelQueries(["favorite products"]);

      const previousFavorites = queryClient.getQueryData(["favorite products"]);

      queryClient.setQueryData(["favorite products"], (old) => {
        return {
          ...old,
          data: old.data.filter((product) => product.product_id !== productId),
        };
      });

      return { previousFavorites };
    },
    onSuccess: () => {
      toast.success("Removed from favorites");
    },
    onError: (error) => {
      toast.error(error.message);
    },
    onSettled: () => {
      queryClient.invalidateQueries(["favorite products"]);
    },
  });

  return { isLoading, removeFromFavorites };
}
