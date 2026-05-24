import { useSelector } from "react-redux";
import CartDetailsHeader from "../../components/cart/CartDetailsHeader";
import CartDetailsTableLabel from "../../components/cart/CartDetailsTableLabel";
import CartDetailsSummary from "../../components/cart/CartDetailsSummary";
import CartItem from "./CartItem";
import { useDerivedCart } from "../../hooks/useDerivedCart";
import { formatCurrency } from "../../utils/numberFormatter";

function CartDetails() {
  const { derivedCart, totalCartCount } = useDerivedCart();
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

  return (
    <section className="flex w-full flex-col items-start justify-center gap-8 pb-5">
      <CartDetailsHeader />

      <section className="flex w-full flex-col">
        <CartDetailsTableLabel />

        <section className="border-t-grayDF flex w-full items-center justify-between border-t py-8">
          <div className="flex w-full flex-col gap-8">
            {derivedCart?.map((item) => (
              <CartItem
                key={`${item.product_id}-${item.selected_size}-${item.selected_color}`}
                item={item}
                variant="page"
              />
            ))}
          </div>
        </section>

        <CartDetailsSummary
          cartSubtotal={cartSubtotal}
          VAT={VAT}
          shippingFee={
            guaranteedDelivery.date
              ? formatCurrency(shippingFee, 0)
              : shippingFee
          }
          totalAmount={totalAmount}
          totalCartCount={totalCartCount}
          variant="page"
        />
      </section>
    </section>
  );
}

export default CartDetails;
