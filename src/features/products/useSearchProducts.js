import { useQuery } from "@tanstack/react-query";
import { useSearchParams } from "react-router-dom";
import { getProducts } from "../../services/apiProducts";

export function useSearchProducts() {
  const [searchParams] = useSearchParams();
  const searchValue = searchParams.get("q");

  const filters = {
    fabric: searchParams.getAll("fabric"),
    color: searchParams.getAll("color"),
    size: searchParams.getAll("size"),
    collection: searchParams.getAll("collection"),
  };

  const sortBy = searchParams.get("sort");

  const { data, isPending: isSearching } = useQuery({
    queryKey: ["searchedProducts", searchValue, sortBy, filters],
    queryFn: () => getProducts({ searchValue, sortBy, filters }),
    enabled: !!searchValue,
  });

  return { data, isSearching };
}
