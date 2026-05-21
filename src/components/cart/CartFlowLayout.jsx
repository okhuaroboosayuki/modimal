import CheckoutRightPanel from "./CheckoutRightPanel ";
import CheckoutLeftPanel from "./CheckoutLeftPanel ";
import { useDerivedCart } from "../../hooks/useDerivedCart";
import { useSelector } from "react-redux";
import { formatCurrency } from "../../utils/numberFormatter";

function CartFlowLayout() {
  const { derivedCart, totalCartCount, isLoading } = useDerivedCart();
  const { guaranteedDelivery } = useSelector((store) => store.checkoutReducer);

  const cartSubtotal = derivedCart?.reduce((acc, item) => {
    return acc + item.quantity * item.products.price;
  }, 0);

  const TAX_RATE = 0.075;
  const VAT = cartSubtotal * TAX_RATE;
  const shippingFee = guaranteedDelivery.date
    ? guaranteedDelivery.cost
    : "free";
  const totalAmount = guaranteedDelivery.date
    ? cartSubtotal + VAT + shippingFee
    : cartSubtotal + VAT;

  const cartSummaryDetails = {
    TAX_RATE,
    cartSubtotal,
    VAT,
    shippingFee: guaranteedDelivery.date
      ? formatCurrency(shippingFee, 0)
      : shippingFee,
    totalAmount,
    totalCartCount,
  };

  return (
    <div
      className="relative flex w-full flex-col-reverse gap-2 text-sm sm:text-lg lg:grid lg:h-screen lg:grid-cols-2 lg:grid-rows-1"
      id="checkoutFlow"
    >
      <CheckoutLeftPanel
        totalCartCount={totalCartCount}
        totalAmount={totalAmount}
      />

      <CheckoutRightPanel
        cartItems={derivedCart}
        totalCartCount={totalCartCount}
        cartSummaryDetails={cartSummaryDetails}
        isCartLoading={isLoading}
      />
    </div>
  );
}

export default CartFlowLayout;
