import { useQuery } from "@tanstack/react-query";
import { getProductsByCategory } from "../../services/apiProducts";

export function useRelatedProducts(category) {
  const { data, isPending: isRelatedProductLoading } = useQuery({
    queryKey: ["relatedProducts", category],
    queryFn: () =>
      getProductsByCategory(category, { sortBy: null, filters: {} }),
    enabled: !!category,
  });

  const relatedProducts = data?.data?.filter(
    (product) => product.stockQuantity > 0,
  );

  return { relatedProducts, isRelatedProductLoading };
}
