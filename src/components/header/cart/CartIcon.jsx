import { useEffect, useState } from "react";
import { getGuestCart } from "../../../utils/guestCart";
import ShoppingBagIcon from "./../../icons/ShoppingBagIcon";
import { useUser } from "../../../features/auth/useUser";
import { useCart } from "../../../features/cart/useCart";

function CartIcon({ onClick, windowname }) {
  const [cartCount, setCartCount] = useState(null);
  const { isAuthenticated } = useUser();
  const { totalCartCount } = useCart();

  useEffect(() => {
    function getGuestCartCount() {
      const updateCartCount = () => {
        const guestCart = getGuestCart();
        const cartItemCount = guestCart.length;

        setCartCount(cartItemCount);
      };

      updateCartCount();
      window.addEventListener("cartUpdated", updateCartCount);

      return () => {
        window.removeEventListener("cartUpdated", updateCartCount);
      };
    }

    if (isAuthenticated) {
      setCartCount(totalCartCount);
      return;
    }

    getGuestCartCount();
  }, [isAuthenticated, totalCartCount]);

  const isWindowNameCart = windowname === "cart";

  return (
    <li
      className={`icon relative cursor-pointer ${isWindowNameCart && "bg-grayCB p-0.5"}`}
      onClick={onClick}
    >
      <ShoppingBagIcon />
      {cartCount > 0 && (
        <span className="text-neutral-black absolute -top-1.5 -right-1 flex h-4 w-4 items-center justify-center">
          {cartCount}
        </span>
      )}
    </li>
  );
}

export default CartIcon;
