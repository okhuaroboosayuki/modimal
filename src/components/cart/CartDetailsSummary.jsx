import { formatCurrency } from "../../utils/numberFormatter";
import { ProgressLink } from "../ProgressLinks";
import CartDetailsSummaryRow from "./CartDetailsSummaryRow";

function CartDetailsSummary({
  totalCartCount,
  cartSubtotal,
  VAT,
  shippingFee,
  totalAmount,
}) {
  return (
    <section className="flex w-full flex-col items-end">
      <div className="border-t-grayDF flex w-full flex-col items-center justify-center gap-2 border-t py-8 pl-5 text-sm sm:text-lg xl:w-[590px]">
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

        <p className="text-gray20 text-xs">
          The total amount you pay includes all applicable customs duties &
          taxes. We guarantee no additional charges on delivery
        </p>
      </div>

      <ProgressLink
        to={"information"}
        className={
          "bg-primary-600 transition-500-in-out hover:text-primary-600 hover:border-primary-600 w-[184px] p-4 text-center text-sm text-white capitalize hover:border hover:bg-white"
        }
      >
        next
      </ProgressLink>
    </section>
  );
}

export default CartDetailsSummary;
