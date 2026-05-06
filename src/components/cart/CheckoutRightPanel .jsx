import CartItem from "../../features/cart/CartItem";
import CartDetailsSummary from "./CartDetailsSummary";

function CheckoutRightPanel({ cartItems, cartSummaryDetails }) {
  return (
    <section className="lg:bg-primary-25 hide-scrollbar order-1 flex flex-col gap-10 bg-white px-5 pt-10 pb-10 lg:order-2 lg:overflow-y-scroll lg:pb-20 xl:pr-28 xl:pl-6">
      <h3 className="text-center text-base font-semibold capitalize sm:text-[20px]">
        your cart
      </h3>

      <div className="flex flex-col gap-8">
        {cartItems?.map((item) => (
          <CartItem
            key={`${item.product_id}-${item.selected_size}-${item.selected_color}`}
            item={item}
            variant="info"
          />
        ))}

        <CartDetailsSummary
          cartSubtotal={cartSummaryDetails.cartSubtotal}
          VAT={cartSummaryDetails.VAT}
          shippingFee={cartSummaryDetails.shippingFee}
          totalAmount={cartSummaryDetails.totalAmount}
          totalCartCount={cartSummaryDetails.totalCartCount}
          variant="info"
        />
      </div>
    </section>
  );
}

export default CheckoutRightPanel;
