import { useCheckoutForm } from "../../hooks/useCheckoutForm";
import FormField from "../auth/FormField";

function NamesFieldGroup() {
  const {
    register,
    watch,
    formState: { errors },
  } = useCheckoutForm();

  const firstNameValue = watch("firstName", "");
  const lastNameValue = watch("lastName", "");

  return (
    <div className="flex items-center justify-center gap-6">
      <FormField
        inputType={"text"}
        name={"firstName"}
        placeholder={"first name"}
        inputValue={firstNameValue}
        {...register("firstName", {
          required: "This field is required",
          pattern: {
            value: /^[A-Za-z]+$/,
            message:
              "Only letters are allowed (no numbers, spaces, or symbols)",
          },
        })}
        error={errors.firstName?.message}
      />

      <FormField
        inputType={"text"}
        name={"lastName"}
        placeholder={"last name"}
        inputValue={lastNameValue}
        {...register("lastName", {
          required: "This field is required",
          pattern: {
            value: /^[A-Za-z]+$/,
            message:
              "Only letters are allowed (no numbers, spaces, or symbols)",
          },
        })}
        error={errors.lastName?.message}
      />
    </div>
  );
}

export default NamesFieldGroup;
