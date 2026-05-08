import { formatCurrency } from "../../utils/numberFormatter";
import { ProgressLink } from "../ProgressLinks";
import CartDetailsSummaryRow from "./CartDetailsSummaryRow";

function CartDetailsSummary({
  totalCartCount,
  cartSubtotal,
  VAT,
  shippingFee,
  totalAmount,
  variant,
}) {
  return (
    <section className="flex w-full flex-col items-end">
      <div
        className={`${variant === "page" && "border-t-grayDF border-t pl-5 xl:w-[590px]"} flex w-full flex-col items-center justify-center gap-2 py-8 text-sm sm:text-lg`}
      >
        <CartDetailsSummaryRow
          label={`subtotal (${totalCartCount})`}
          value={formatCurrency(cartSubtotal, 0)}
        />

        <CartDetailsSummaryRow label={"tax"} value={formatCurrency(VAT)} />

        <CartDetailsSummaryRow label={"shipping"} value={shippingFee} />

        <CartDetailsSummaryRow
          label={"total amount"}
          value={formatCurrency(totalAmount)}
        />

        <p className="text-gray20 self-start text-xs">
          The total amount you pay includes all applicable customs duties &
          taxes. We guarantee no additional charges on delivery
        </p>
      </div>

      {variant === "page" && (
        <ProgressLink
          to={totalCartCount === 0 ? "/shop-all" : "/cart/information"}
          className={
            "bg-primary-600 transition-500-in-out hover:text-primary-600 hover:border-primary-600 w-[184px] p-4 text-center text-sm text-white capitalize hover:border hover:bg-white"
          }
        >
          {totalCartCount === 0 ? "select a product" : "next"}
        </ProgressLink>
      )}
    </section>
  );
}

export default CartDetailsSummary;
