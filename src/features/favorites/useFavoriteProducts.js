import { useQuery } from "@tanstack/react-query";
import { getFavoriteProducts } from "../../services/apiProducts";
import { useUser } from "../auth/useUser";

export function useFavoriteProducts() {
  const { data } = useUser();

  const { data: favoriteProducts, isPending: isFavoriteLoading } = useQuery({
    queryKey: ["favorite products", data?.id],
    queryFn: getFavoriteProducts,
  });

  return {
    isFavoriteLoading,
    favoriteProducts,
    totalCount: favoriteProducts?.count,
  };
}
