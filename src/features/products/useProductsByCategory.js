import { useLocation } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import useUrlParams from "../../hooks/useUrlParams";
import { getProductsByCategory } from "../../services/apiProducts";

export function useProductsByCategory() {
  const location = useLocation();
  const { filters, sortBy } = useUrlParams();

  const slicedPathName = location.pathname.slice(1);
  const categoryName = slicedPathName.split("-").join(" ");

  const { data, isPending: isProductCatLoading } = useQuery({
    queryKey: [categoryName, sortBy, filters],
    queryFn: () => getProductsByCategory(categoryName, { sortBy, filters }),
    enabled: !!categoryName,
  });

  return { data, isProductCatLoading };
}
