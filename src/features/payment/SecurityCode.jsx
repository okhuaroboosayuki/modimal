import Input from "./../../components/Input";
import ToolTip from "./ToolTip";

function SecurityCode({ disabled, register, error, setValue }) {
  return (
    <div className="flex items-center gap-2 lg:gap-4">
      <span className="w-[43%] max-md:text-sm sm:w-[25%] md:w-[50%] lg:w-[45%] xl:w-1/3">
        security code*
      </span>

      <div className="flex w-full items-center gap-5">
        <Input
          type={"text"}
          name={"securityCode"}
          customStyle={`border text-center ${disabled ? "border-grayCB text-grayCB cursor-not-allowed" : error ? "border-error" : "border-gray60 text-inherit focus-within:border-primary-300"} w-full max-w-[100px] px-1 py-2 placeholder:lowercase!`}
          inputMode={"numeric"}
          maxLength={4}
          placeholder={"xxx"}
          disabled={disabled}
          {...register("securityCode", {
            required: "This field is required",
            onChange: (e) => {
              const digits = e.target.value.replace(/\D/g, "");
              setValue("securityCode", digits);
              e.target.value = digits;
            },
          })}
        />

        <ToolTip />
      </div>
    </div>
  );
}

export default SecurityCode;
