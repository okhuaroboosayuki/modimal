import { useQuery } from "@tanstack/react-query";
import { getFavoriteProducts } from "../../services/apiProducts";

export function useFavoriteProducts() {
  const { data: favoriteProducts, isPending: isFavoriteLoading } = useQuery({
    queryKey: ["favorite products"],
    queryFn: getFavoriteProducts,
  });

  return {
    isFavoriteLoading,
    favoriteProducts,
    totalCount: favoriteProducts?.count,
  };
}
