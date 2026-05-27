import CheckBox from "../../components/CheckBox";
import AlternativeBillingForm from "./AlternativeBillingForm";

function AlternativeBillingAddress({
  register,
  watch,
  errors,
  setValue,
  isChecked,
  onChange,
}) {
  return (
    <div className="flex w-full flex-col items-start gap-8 self-start">
      <CheckBox
        label={"add an alternative billing address"}
        isChecked={isChecked}
        handleChange={onChange}
        className={"text-sm sm:text-base"}
      />

      {isChecked && (
        <AlternativeBillingForm
          register={register}
          watch={watch}
          setValue={setValue}
          errors={errors}
        />
      )}
    </div>
  );
}

export default AlternativeBillingAddress;
