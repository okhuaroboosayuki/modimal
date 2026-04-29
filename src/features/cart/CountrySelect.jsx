import { Controller } from "react-hook-form";
import { RiCloseFill } from "react-icons/ri";
import { useCheckoutForm } from "../../hooks/useCheckoutForm";
import CountryDropdown from "./CountryDropdown";
import SelectContainer from "../../components/cart/SelectContainer";

function CountrySelect({ disabled }) {
  const {
    control,
    resetField,
    watch,
    setValue,
    formState: { errors },
  } = useCheckoutForm();

  const selectedCountry = watch("country");
  const error = errors.country?.message;

  return (
    <SelectContainer disabled={disabled} error={error}>
      <Controller
        name="country"
        control={control}
        rules={{ required: "choose your country of residence" }}
        render={({ field }) => (
          <CountryDropdown
            field={field}
            onCountryChange={() => resetField("state")}
          />
        )}
      />

      {selectedCountry && (
        <RiCloseFill
          className="cursor-pointer"
          onClick={() => {
            resetField("country");
            setValue("country/region");
          }}
        />
      )}
    </SelectContainer>
  );
}

export default CountrySelect;
