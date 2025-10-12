import { useQuery } from "@tanstack/react-query";
import { getProducts } from "../../services/apiProducts";
import useUrlParams from "../../hooks/useUrlParams";

export function useSearchProducts() {
  const { searchValue, filters, sortBy } = useUrlParams();

  const { data, isPending: isSearching } = useQuery({
    queryKey: ["searchedProducts", searchValue, sortBy, filters],
    queryFn: () => getProducts({ searchValue, sortBy, filters }),
    enabled: !!searchValue,
  });

  return { data, isSearching };
}
