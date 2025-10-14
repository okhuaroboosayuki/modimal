import { useQuery } from "@tanstack/react-query";
import useUrlParams from "../../hooks/useUrlParams";
import { getNewProducts } from "../../services/apiProducts";

export function useNewProducts() {
  const { filters, sortBy } = useUrlParams();

  const { data, isPending: isNewProductLoading } = useQuery({
    queryKey: ["newProducts", sortBy, filters],
    queryFn: () => getNewProducts({ sortBy, filters }),
  });

  return { data, isNewProductLoading };
}
