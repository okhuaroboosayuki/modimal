import { useUser } from "../../features/auth/useUser";
import { useGuestCart } from "../../utils/guestCart";
import { useCart } from "../../features/cart/useCart";
import CartItem from "../../features/cart/CartItem";
import CartDetailsSummary from "./CartDetailsSummary";
import CheckoutRightPanel from "./CheckoutRightPanel ";
import CheckoutLeftPanel from "./CheckoutLeftPanel ";

function CartFlowLayout() {
  const { isAuthenticated } = useUser();
  const guestCart = useGuestCart();
  const { cart } = useCart();

  const derivedCart = isAuthenticated ? cart?.data : guestCart;
  const totalCartCount = derivedCart?.length;

  const cartSubtotal = derivedCart?.reduce((acc, item) => {
    return acc + item.quantity * item.products.price;
  }, 0);

  const TAX_RATE = 0.075;
  const VAT = cartSubtotal * TAX_RATE;
  const shippingFee = "free";
  const totalAmount = cartSubtotal + VAT;

  const cartSummaryDetails = {
    TAX_RATE,
    cartSubtotal,
    VAT,
    shippingFee,
    totalAmount,
    totalCartCount,
  };

  if (!derivedCart || derivedCart.length === 0) return null;

  return (
    <div className="flex w-full flex-col-reverse gap-2 text-sm sm:text-lg lg:grid lg:h-screen lg:grid-cols-2 lg:grid-rows-1">
      <CheckoutLeftPanel />

      <CheckoutRightPanel
        cartItems={derivedCart}
        cartSummaryDetails={cartSummaryDetails}
      />
    </div>
  );
}

export default CartFlowLayout;
