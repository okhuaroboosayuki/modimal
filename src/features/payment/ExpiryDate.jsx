import Input from "./../../components/Input";

function ExpiryDate({ disabled, register, errors, setValue }) {
  const expiryMonthError = errors.expiryMonth?.message;
  const expiryYearError = errors.expiryYear?.message;

  return (
    <div className="flex items-center gap-2 lg:gap-4">
      <span className="w-[43%] max-md:text-sm sm:w-[25%] md:w-[50%] lg:w-[45%] xl:w-1/3">
        expiry date*
      </span>

      <div className="flex w-full items-start gap-6">
        <Input
          type={"text"}
          name={"expiryMonth"}
          customStyle={`border text-center ${disabled ? "border-grayCB text-grayCB cursor-not-allowed" : expiryMonthError ? "border-error" : "border-gray60 text-inherit focus-within:border-primary-300"} w-full max-w-[67px] px-1 py-2`}
          inputMode={"numeric"}
          maxLength={2}
          placeholder={"month"}
          disabled={disabled}
          {...register("expiryMonth", {
            validate: (value) => {
              const month = parseInt(value, 10);
              if (isNaN(month) || month < 1 || month > 12) {
                return "Please enter a valid month";
              }
              return true;
            },
            required: "This field is required",
            onChange: (e) => {
              const digits = e.target.value.replace(/\D/g, "");
              setValue("expiryMonth", digits);
              e.target.value = digits;
            },
          })}
        />

        <Input
          type={"text"}
          name={"expiryYear"}
          customStyle={`border text-center ${disabled ? "border-grayCB text-grayCB cursor-not-allowed" : expiryYearError ? "border-error" : "border-gray60 text-inherit focus-within:border-primary-300"} w-full max-w-[67px] px-1 py-2`}
          inputMode={"numeric"}
          maxLength={2}
          placeholder={"year"}
          disabled={disabled}
          {...register("expiryYear", {
            validate: (value) => {
              const length = value.replace(/\D/g, "").length;
              if (length !== 2) {
                return "Please enter a valid year";
              }

              //checks if the year inputted is in the past compared to the current year
              const currentYear = new Date().getFullYear() % 100; //get last two digits of current year
              const inputYear = parseInt(value, 10);
              if (isNaN(inputYear) || inputYear < currentYear) {
                return "Card has expired";
              }
            },
            required: "This field is required",
            onChange: (e) => {
              const digits = e.target.value.replace(/\D/g, "");
              setValue("expiryYear", digits);
              e.target.value = digits;
            },
          })}
        />
      </div>
    </div>
  );
}

export default ExpiryDate;
