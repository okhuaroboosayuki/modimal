import { useUser } from "../features/auth/useUser";
import { useAddFavoriteProduct } from "../features/favorites/useAddFavoriteProduct";
import { useFavoriteProducts } from "../features/favorites/useFavoriteProducts";
import { useRemoveFavoriteProduct } from "../features/favorites/useRemoveFavoriteProduct";

export function useToggleFavorite(productId) {
  const { isAuthenticated, data } = useUser();
  const { favoriteProducts, isFavoriteLoading } = useFavoriteProducts();
  const { addToFavorites } = useAddFavoriteProduct();
  const { removeFromFavorites } = useRemoveFavoriteProduct();

  const userId = data?.id;

  const handleAddFavorite = () => {
    if (!isAuthenticated) return;
    addToFavorites({ userId, productId });
  };

  const handleRemoveFavorite = () => {
    if (!isAuthenticated) return;
    removeFromFavorites({ userId, productId });
  };

  const isProductInFavorites = favoriteProducts?.data?.some(
    (product) => product.product_id === productId,
  );

  return {
    handleAddFavorite,
    handleRemoveFavorite,
    isProductInFavorites,
    isFavoriteLoading,
  };
}
