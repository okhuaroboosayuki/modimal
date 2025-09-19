import { useQuery } from "@tanstack/react-query";
import { useSearchParams } from "react-router-dom";
import { searchProducts } from "../../services/apiProducts";

export function useSearchProducts() {
  const [searchParams] = useSearchParams();
  const searchQuery = searchParams.get("q");

  const { data, isPending: isSearching } = useQuery({
    queryKey: ["searchedProducts", searchQuery],
    queryFn: () => searchProducts(searchQuery),
  });

  return { data, isSearching };
}
