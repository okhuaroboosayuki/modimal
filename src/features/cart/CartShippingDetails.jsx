import { useCheckoutForm } from "../../hooks/useCheckoutForm";
import { PHONE_PATTERNS } from "../../utils/contants";
import FormField from "../auth/FormField";
import CityPostalCodeGroup from "./CityPostalCodeGroup";
import CountrySelect from "./CountrySelect";
import NamesFieldGroup from "./NamesFieldGroup";

function CartShippingDetails() {
  const {
    register,
    watch,
    formState: { errors },
  } = useCheckoutForm();

  const selectedCountry = watch("country");
  const companyValue = watch("company");
  const addressValue = watch("address");
  const apartmentValue = watch("apartment");
  const phoneValue = watch("phone");

  const phoneRule = PHONE_PATTERNS[selectedCountry] || PHONE_PATTERNS.default;

  return (
    <section className="flex w-full flex-col items-start gap-4">
      <h4>shipping address</h4>

      <div className="flex w-full flex-col gap-3">
        <CountrySelect />

        <NamesFieldGroup />

        <FormField
          inputType={"text"}
          name={"company"}
          placeholder={"company (optional)"}
          inputValue={companyValue}
          {...register("company")}
        />

        <FormField
          inputType={"text"}
          name={"address"}
          placeholder={"address"}
          inputValue={addressValue}
          {...register("address", {
            required: "This field is required",
          })}
          error={errors.address?.message}
        />

        <FormField
          inputType={"text"}
          name={"apartment"}
          placeholder={"apartment, suite, etc. (optional)"}
          inputValue={apartmentValue}
          {...register("apartment")}
        />

        <CityPostalCodeGroup />

        <FormField
          inputType={"text"}
          name={"phone"}
          placeholder={"phone"}
          inputValue={phoneValue}
          inputMode={"numeric"}
          {...register("phone", {
            required: "This field is required",
            pattern: phoneRule,
          })}
          error={errors.phone?.message}
        />
      </div>
    </section>
  );
}

export default CartShippingDetails;
