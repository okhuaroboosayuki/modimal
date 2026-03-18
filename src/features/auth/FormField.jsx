import { useState } from "react";
import Input from "../../components/Input";
import FloatingInputLabel from "../../components/FloatingInputLabel";

function FormField({
  error,
  name,
  inputType,
  placeholder,
  inputValue,
  disabled,
  ...props
}) {
  const [isFocused, setIsFocused] = useState(false);

  // Label should float up if the input is focused OR already has a value
  const isFloating = isFocused || Boolean(inputValue);

  return (
    <div className="relative flex w-full flex-col items-start gap-1">
      <FloatingInputLabel
        error={error}
        isFloating={isFloating}
        name={name}
        placeholder={placeholder}
      />

      <Input
        {...props}
        type={inputType}
        name={name}
        onFocus={() => setIsFocused(true)}
        onBlur={(e) => {
          setIsFocused(false);
          props.onBlur?.(e);
        }}
        customStyle={`w-full border ${disabled ? "border-grayCB text-grayCB cursor-not-allowed" : error ? "border-error" : "border-gray60 focus:border-primary-300 text-inherit"} placeholder:capitalize px-4 py-2`}
        disabled={disabled}
      />
      {error && <span className="text-error text-xs">{error}</span>}
    </div>
  );
}

export default FormField;
