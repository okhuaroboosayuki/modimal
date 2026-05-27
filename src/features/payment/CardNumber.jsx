import { CiCreditCard2 } from "react-icons/ci";
import AmericanExpressIcon from "../../components/icons/AmericanExpressIcon";
import MastercardIcon from "../../components/icons/MastercardIcon";
import VisaIcon from "../../components/icons/VisaIcon";
import Input from "../../components/Input";
import { formatCardNumber } from "../../utils/formatCardNumber";
import { getCardType } from "../../utils/getCardType";

function CardNumber({ disabled, error, watch, register, setValue, trigger }) {
  const cardNumber = watch("cardNumber");
  const cardType = getCardType(cardNumber);

  return (
    <div className="flex items-center gap-2 lg:gap-4">
      <span className="w-[43%] max-md:text-sm sm:w-[25%] md:w-[50%] lg:w-[45%] xl:w-1/3">
        card number*
      </span>

      <div className="relative w-full flex-col items-start">
        <div
          className={`w-full border ${disabled ? "border-grayCB text-grayCB cursor-not-allowed" : error ? "border-error" : "border-gray60 focus-within:border-primary-300"} flex items-center justify-center gap-2 px-1 py-2`}
        >
          {(!cardNumber || cardNumber.length < 2) && (
            <CiCreditCard2 className="[svg]:h-[1.25rem] [svg]:w-[1.25rem]" />
          )}

          {cardType === "visa" && <VisaIcon width={20} height={10} />}
          {cardType === "mastercard" && (
            <MastercardIcon width={20} height={10} />
          )}
          {cardType === "amex" && (
            <AmericanExpressIcon width={20} height={10} />
          )}

          <Input
            type={"text"}
            name={"cardNumber"}
            customStyle={`w-full h-full text-inherit placeholder:lowercase!`}
            inputMode={"numeric"}
            maxLength={cardType === "amex" ? 17 : 19}
            placeholder={"xxxx xxxx xxxx xxxx"}
            disabled={disabled}
            {...register("cardNumber", {
              validate: (value) => {
                const length = value.replace(/\D/g, "").length;
                if (cardType === "amex" && length !== 15) {
                  return "Please enter a valid card number";
                }
                if (
                  (cardType === "visa" || cardType === "mastercard") &&
                  length !== 16
                ) {
                  return "Please enter a valid card number";
                }
                return true;
              },
              required: "This field is required",
              onChange: (e) => {
                const digits = e.target.value.replace(/\D/g, "");
                const formatted = formatCardNumber(digits, cardType);

                setValue("cardNumber", digits);
                e.target.value = formatted;
                trigger("cardNumber");
              },
            })}
          />
        </div>

        {error && (
          <p className="text-error absolute left-0 mt-0.5 text-xs">{error}</p>
        )}
      </div>
    </div>
  );
}

export default CardNumber;
