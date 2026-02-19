import { useQuery } from "@tanstack/react-query";
import { getProductsByCategory } from "../../services/apiProducts";

export function useRelatedProducts(category) {
  const { data: relatedProducts, isPending: isRelatedProductLoading } =
    useQuery({
      queryKey: ["relatedProducts", category],
      queryFn: () =>
        getProductsByCategory(category, { sortBy: null, filters: {} }),
      enabled: !!category,
    });

  return { relatedProducts, isRelatedProductLoading };
}
