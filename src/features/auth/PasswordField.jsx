import { useState } from "react";
import Input from "../../components/Input";
import FloatingInputLabel from "../../components/FloatingInputLabel";
import PasswordVisibilityIcon from "../../components/PasswordVisibilityIcon";
import { useFloatingLabel } from "../../hooks/useFloatingLabel";

function PasswordField({
  error,
  name = "password",
  placeholder = "password",
  passwordValue = "",
  disabled,
  ...props
}) {
  const [isVisible, setIsVisible] = useState(false);
  const { isFloating, setIsFocused } = useFloatingLabel(passwordValue);

  const handlePasswordVisibility = () => {
    if (!passwordValue || disabled) return;
    setIsVisible((prev) => !prev);
  };

  return (
    <div className="relative flex w-full flex-col items-start gap-1">
      <FloatingInputLabel
        errorStyles={error ? "top-1/3" : "top-1/2"}
        isFloating={isFloating}
        name={name}
        placeholder={placeholder}
      />

      <div
        className={`${disabled ? "border-grayCB cursor-not-allowed" : error ? "border-error" : "border-gray60 focus-within:border-primary-300"} flex w-full border px-4 py-2`}
      >
        <Input
          {...props}
          type={!isVisible ? "password" : "text"}
          name={name}
          onFocus={() => setIsFocused(true)}
          onBlur={(e) => {
            setIsFocused(false);
            props.onBlur?.(e);
          }}
          customStyle={`w-full placeholder:capitalize ${disabled ? "text-grayCB cursor-not-allowed" : "text-inherit"}`}
          disabled={disabled}
        />

        <PasswordVisibilityIcon
          handleClick={handlePasswordVisibility}
          isVisible={isVisible}
        />
      </div>
      {error && <span className="text-error text-xs">{error}</span>}
    </div>
  );
}

export default PasswordField;
