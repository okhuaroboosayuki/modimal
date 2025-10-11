import { useQuery } from "@tanstack/react-query";
import { getProducts } from "../../services/apiProducts";
import { useSearchParams } from "react-router-dom";

export function useProducts() {
  const [searchParams] = useSearchParams();

  const filters = {
    fabric: searchParams.getAll("fabric"),
    color: searchParams.getAll("color"),
    size: searchParams.getAll("size"),
    collection: searchParams.getAll("collection"),
  };

  const sortBy = searchParams.get("sort");

  const { data, isPending: isAllProductLoading } = useQuery({
    queryKey: ["all-products", sortBy, filters],
    queryFn: () => getProducts({ filters, sortBy }),
  });

  return { data, isAllProductLoading };
}
