import { useQuery } from "@tanstack/react-query";
import useUrlParams from "../../hooks/useUrlParams";
import { getProductsByPlusSize } from "../../services/apiProducts";

export function usePlusSizeProducts() {
  const { filters, sortBy } = useUrlParams();

  const { data, isPending: isPlusSizeProductLoading } = useQuery({
    queryKey: ["plusSize-products", sortBy, filters],
    queryFn: () => getProductsByPlusSize({ sortBy, filters }),
  });

  return { data, isPlusSizeProductLoading };
}
