import { useQuery } from "@tanstack/react-query";
import { getModiweekProducts } from "../../services/apiProducts";

export function useModiweekProducts() {
  const { data, isPending: isModiweekProductLoading } = useQuery({
    queryKey: ["productsByModiweek"],
    queryFn: getModiweekProducts,
  });

  const productsByModiweek = data?.data;

  return {
    productsByModiweek,
    isModiweekProductLoading,
  };
}
