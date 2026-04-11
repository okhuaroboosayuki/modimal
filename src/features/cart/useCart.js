import { useQuery } from "@tanstack/react-query";
import { getCart } from "../../services/apiCart";
import { useUser } from "../auth/useUser";

export function useCart() {
  const { data } = useUser();

  const { data: cart, isPending: isCartLoading } = useQuery({
    queryKey: ["cart", data?.id],
    queryFn: getCart,
  });

  return { cart, isCartLoading, totalCartCount: cart?.count };
}
