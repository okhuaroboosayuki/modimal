import { useQuery } from "@tanstack/react-query";
import { getCart } from "../../services/apiCart";

export function useCart() {
  const { data: cart, isPending: isCartLoading } = useQuery({
    queryKey: ["cart"],
    queryFn: getCart,
  });

  return { cart, isCartLoading, totalCartCount: cart?.count };
}
