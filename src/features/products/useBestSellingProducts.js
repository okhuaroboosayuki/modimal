import { useQuery } from "@tanstack/react-query";
import useUrlParams from "../../hooks/useUrlParams";
import { getProductsByBestSeller } from "../../services/apiProducts";

export function useBestSellingProducts() {
  const { filters, sortBy } = useUrlParams();

  const { data, isPending: isBestSellerProductLoading } = useQuery({
    queryKey: ["best-sellers", sortBy, filters],
    queryFn: () => getProductsByBestSeller({ sortBy, filters }),
  });

  return { data, isBestSellerProductLoading };
}
