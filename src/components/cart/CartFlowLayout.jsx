import CheckoutRightPanel from "./CheckoutRightPanel ";
import CheckoutLeftPanel from "./CheckoutLeftPanel ";
import { useDerivedCart } from "../../hooks/useDerivedCart";

function CartFlowLayout() {
  const { derivedCart, totalCartCount } = useDerivedCart();

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

  return (
    <div
      className="relative flex w-full flex-col-reverse gap-2 text-sm sm:text-lg lg:grid lg:h-screen lg:grid-cols-2 lg:grid-rows-1"
      id="checkoutFlow"
    >
      <CheckoutLeftPanel />

      <CheckoutRightPanel
        cartItems={derivedCart}
        totalCartCount={totalCartCount}
        cartSummaryDetails={cartSummaryDetails}
      />
    </div>
  );
}

export default CartFlowLayout;
