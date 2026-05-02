import { useCheckoutForm } from "../../hooks/useCheckoutForm";
import FormField from "../auth/FormField";
import { useUser } from "../auth/useUser";

function NamesFieldGroup() {
  const {
    register,
    watch,
    getValues,
    formState: { errors },
  } = useCheckoutForm();
  const { isAuthenticated } = useUser();

  const firstNameValue = watch("firstName", "");
  const lastNameValue = watch("lastName", "");
  const firstNameDisabled = isAuthenticated && getValues("firstName");
  const lastNameDisabled = isAuthenticated && getValues("lastName");

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
        disabled={firstNameDisabled}
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
        disabled={lastNameDisabled}
        error={errors.lastName?.message}
      />
    </div>
  );
}

export default NamesFieldGroup;
