import AmericanExpressIcon from "../icons/AmericanExpressIcon";
import MastercardIcon from "../icons/MastercardIcon";
import VisaIcon from "../icons/VisaIcon";

function PaymentMethodIcons() {
  return (
    <div className="flex items-center justify-center gap-9 self-center min-[420px]:self-start">
      <AmericanExpressIcon width={60} height={32} />

      <VisaIcon width={68} height={14} />

      <MastercardIcon width={47} height={31} />
    </div>
  );
}

export default PaymentMethodIcons;
