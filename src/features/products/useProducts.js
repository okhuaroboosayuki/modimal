import { useQuery } from "@tanstack/react-query";
import { getProducts } from "../../services/apiProducts";
import useUrlParams from "../../hooks/useUrlParams";

export function useProducts() {
  const { filters, sortBy } = useUrlParams();

  const { data, isPending: isAllProductLoading } = useQuery({
    queryKey: ["all-products", sortBy, filters],
    queryFn: () => getProducts({ filters, sortBy }),
  });

  return { data, isAllProductLoading };
}
