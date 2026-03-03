import Input from "../../components/Input";

function FormField({
  error,
  name,
  inputType,
  placeholder,
  disabled,
  ...props
}) {
  return (
    <div className="flex w-full flex-col items-start gap-1">
      <Input
        type={inputType}
        name={name}
        placeholder={placeholder}
        customStyle={`w-full border ${error ? "border-error" : "border-gray60 focus:border-primary-300"} placeholder:capitalize px-4 py-2`}
        disabled={disabled}
        {...props}
      />
      {error && <span className="text-error text-xs">{error}</span>}
    </div>
  );
}

export default FormField;
