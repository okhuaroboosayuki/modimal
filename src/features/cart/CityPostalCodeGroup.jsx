import { useCheckoutForm } from "../../hooks/useCheckoutForm";
import { POSTAL_PATTERNS } from "../../utils/contants";
import FormField from "../auth/FormField";
import StateSelect from "./StateSelect";

function CityPostalCodeGroup() {
  const {
    register,
    watch,
    formState: { errors },
  } = useCheckoutForm();

  const postalCodeValue = watch("postalCode", "");
  const selectedCountry = watch("country");

  // depending on the which country is selected, get the matching regex pattern
  const validationRule =
    POSTAL_PATTERNS[selectedCountry] || POSTAL_PATTERNS.default;

  return (
    <div className="flex w-full items-center justify-center gap-6">
      <FormField
        inputType={"text"}
        name={"postalCode"}
        placeholder={"postal code"}
        inputValue={postalCodeValue}
        inputMode={"numeric"}
        {...register("postalCode", {
          required: "This field is required",
          pattern: validationRule,
        })}
        error={errors.postalCode?.message}
      />

      <StateSelect />
    </div>
  );
}

export default CityPostalCodeGroup;
