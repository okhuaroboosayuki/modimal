import { useQuery } from "@tanstack/react-query";
import useUrlParams from "../../hooks/useUrlParams";
import { getProductsByModiweek } from "../../services/apiProducts";

export function useModiweekProducts() {
  const { filters, sortBy } = useUrlParams();

  const { data, isPending: isModiweekProductLoading } = useQuery({
    queryKey: ["productsByModiweek", sortBy, filters],
    queryFn: () => getProductsByModiweek({ sortBy, filters }),
  });

  return { data, isModiweekProductLoading };
}
