import Button from "../../components/Button";
import { formatCurrency } from "../../utils/numberFormatter";

function PayStackPayment({ disabled, totalAmount }) {
  return (
    <section className="flex w-full flex-col gap-4">
      <h2 className="text-neutral-black border-b-grayDF border-b pb-4 font-semibold">
        payment
      </h2>

      <section className="flex w-full flex-col items-start gap-8 self-start">
        <Button
          className={`bg-primary-600 hover:text-primary-600 transition-500-in-out p-3! text-white hover:bg-white ${disabled ? "bg-primary-750! w-[177px] cursor-not-allowed! hover:text-white!" : ""}`}
          isDisabled={disabled}
        >
          {disabled
            ? "loading..."
            : `make payment of ${formatCurrency(totalAmount)}`}
        </Button>
      </section>
    </section>
  );
}

export default PayStackPayment;
