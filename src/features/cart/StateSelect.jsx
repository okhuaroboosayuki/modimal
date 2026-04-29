import { Controller } from "react-hook-form";
import SelectContainer from "../../components/cart/SelectContainer";
import { useCheckoutForm } from "../../hooks/useCheckoutForm";
import StateDropdown from "./StateDropdown";

function StateSelect({ disabled }) {
  const {
    control,
    watch,
    formState: { errors },
  } = useCheckoutForm();

  const selectedCountry = watch("country");

  return (
    <SelectContainer
      disabled={disabled}
      error={errors.state?.message}
      type={"state"}
    >
      <Controller
        name="state"
        control={control}
        rules={{ required: "Select a state" }}
        render={({ field }) => (
          <StateDropdown field={field} country={selectedCountry} />
        )}
      />
    </SelectContainer>
  );
}

export default StateSelect;
