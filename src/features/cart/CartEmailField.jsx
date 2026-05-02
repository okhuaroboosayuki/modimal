import FormField from "../auth/FormField";
import UserIcon from "./../../components/icons/UserIcon";
import { useFloatingLabel } from "../../hooks/useFloatingLabel";
import Input from "../../components/Input";
import FloatingInputLabel from "../../components/FloatingInputLabel";
import { useCheckoutForm } from "../../hooks/useCheckoutForm";
import { useUser } from "../auth/useUser";

function CartEmailField() {
  const {
    register,
    watch,
    getValues,
    formState: { errors },
  } = useCheckoutForm();
  const { isAuthenticated } = useUser();

  const emailValue = watch("email", "");

  const { isFloating, setIsFocused } = useFloatingLabel(emailValue);
  const error = errors.email?.message;
  const disabled = isAuthenticated && getValues("email");

  return (
    <div className="flex w-full flex-col items-start gap-1">
      <div
        className={`${disabled ? "border-grayCB cursor-not-allowed" : error ? "border-error" : "border-gray60 focus-within:border-primary-300"} relative flex w-full items-center gap-2 border px-4 py-2`}
      >
        <FloatingInputLabel
          errorStyles={error ? "top-[50%]" : "top-1/2"}
          isFloating={isFloating}
          name={"email"}
          placeholder={"email"}
          className={"left-8.5"}
        />

        <UserIcon
          width={16}
          height={16}
          className={isFloating ? "text-primary-300" : "text-gray60"}
        />

        <Input
          {...register("email", {
            required: "This field is required",
          })}
          type={"email"}
          name={"email"}
          onFocus={() => setIsFocused(true)}
          onBlur={() => {
            setIsFocused(false);
          }}
          customStyle={`w-full ${disabled && "text-grayCB cursor-not-allowed"}`}
          disabled={disabled}
        />
      </div>

      {error && <span className="text-error text-xs">{error}</span>}
    </div>
  );
}

export default CartEmailField;
