import { useQuery } from "@tanstack/react-query";
import { getProducts } from "../../services/apiProducts";

export function useProducts() {
  const {
    data: { data: products, count },
    isPending: isProductLoading,
  } = useQuery({
    queryKey: ["products"],
    queryFn: getProducts,
  });

  return { products, count, isProductLoading };
}
