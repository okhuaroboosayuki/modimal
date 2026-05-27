import PaymentMethodIcons from "../../components/payment/PaymentMethodIcons";
import CardNumber from "./CardNumber";
import ExpiryDate from "./ExpiryDate";
import SecurityCode from "./SecurityCode";
import Button from "./../../components/Button";

function PaymentForm({ disabled, errors, register, watch, setValue, trigger }) {
  return (
    <section className="flex w-full flex-col gap-4">
      <h2 className="text-neutral-black border-b-grayDF border-b pb-4 font-semibold">
        payment
      </h2>

      <section className="flex w-full flex-col items-start gap-8 self-start">
        <PaymentMethodIcons />

        <div className="flex w-full flex-col gap-6 min-[1440px]:pr-48 lg:pr-12">
          <CardNumber
            register={register}
            watch={watch}
            setValue={setValue}
            disabled={disabled}
            trigger={trigger}
            error={errors.cardNumber?.message}
          />

          <ExpiryDate
            register={register}
            errors={errors}
            setValue={setValue}
            disabled={disabled}
          />

          <SecurityCode
            register={register}
            error={errors.securityCode?.message}
            setValue={setValue}
            disabled={disabled}
          />
        </div>

        <Button className="bg-primary-600 hover:text-primary-600 transition-500-in-out w-full p-3! text-white hover:bg-white">
          pay and place order
        </Button>
      </section>
    </section>
  );
}

export default PaymentForm;
