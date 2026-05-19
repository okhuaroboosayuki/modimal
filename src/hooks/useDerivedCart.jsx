import { useUser } from "../features/auth/useUser";
import { useCart } from "../features/cart/useCart";
import { useGuestCart } from "../utils/guestCart";

export function useDerivedCart() {
  const { isAuthenticated, isLoading } = useUser();
  const guestCart = useGuestCart();
  const { cart } = useCart();

  const derivedCart = isAuthenticated ? cart?.data : guestCart;
  const totalCartCount = derivedCart?.length;

  return { derivedCart, totalCartCount, isLoading };
}
