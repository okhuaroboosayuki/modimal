import { useQuery } from "@tanstack/react-query";
import { useSearchParams } from "react-router-dom";
import { getProducts } from "../../services/apiProducts";

export function useSearchProducts() {
  const [searchParams] = useSearchParams();
  const searchQuery = searchParams.get("q");

  // Get all other filter parameters.
  const filters = {
    fabric: searchParams.getAll("fabric"),
    color: searchParams.getAll("color"),
    size: searchParams.getAll("size"),
    collection: searchParams.getAll("collection"),
  };

  console.log(filters);

  // // Get the sort parameter
  const sortBy = searchParams.get("sort");

  const { data, isPending: isSearching } = useQuery({
    queryKey: ["searchedProducts", searchQuery, sortBy, filters],
    queryFn: () => getProducts(searchQuery, sortBy, filters),
  });

  return { data, isSearching };
}
