import { RiArrowLeftSLine } from "react-icons/ri";
import Button from "../Button";
import { ProgressLink } from "../ProgressLinks";

function CheckoutFormActions({
  goBackUrl,
  linkText,
  btnText,
  disabledStyle,
  onClick,
}) {
  return (
    <div className="flex w-full items-center justify-between gap-6 max-[375px]:flex-col-reverse">
      <ProgressLink to={goBackUrl} className="flex items-center gap-1">
        <span className="icon">
          <RiArrowLeftSLine color="#5a6d57" />
        </span>

        <span>{linkText}</span>
      </ProgressLink>

      <Button
        className={`bg-primary-600 hover:text-primary-600 transition-500-in-out p-3! text-white hover:bg-white ${disabledStyle}`}
        clickHandler={onClick}
      >
        {btnText}
      </Button>
    </div>
  );
}

export default CheckoutFormActions;
