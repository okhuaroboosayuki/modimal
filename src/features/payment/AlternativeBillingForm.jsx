import FormField from "../auth/FormField";

function AlternativeBillingForm({ register, watch, errors, setValue }) {
  const watchedFields = watch();

  return (
    <section className="flex w-full flex-col gap-2">
      <FormField
        inputType={"text"}
        name={"fullName"}
        placeholder={"full name"}
        inputValue={watchedFields.fullName ?? ""}
        {...register("fullName", {
          required: "This field is required",
        })}
        error={errors.fullName?.message}
      />

      <FormField
        inputType={"email"}
        name={"altEmail"}
        placeholder={"email"}
        inputValue={watchedFields.altEmail ?? ""}
        {...register("altEmail", {
          required: "This field is required",
        })}
        error={errors.altEmail?.message}
      />

      <FormField
        inputType={"text"}
        name={"altCountry"}
        placeholder={"country"}
        inputValue={watchedFields.altCountry ?? ""}
        {...register("altCountry", {
          required: "This field is required",
        })}
        error={errors.altCountry?.message}
      />

      <FormField
        inputType={"text"}
        name={"altAddress"}
        placeholder={"address"}
        inputValue={watchedFields.altAddress ?? ""}
        {...register("altAddress", {
          required: "This field is required",
        })}
        error={errors.altAddress?.message}
      />

      <FormField
        inputType={"text"}
        name={"altCity"}
        placeholder={"city"}
        inputValue={watchedFields.altCity ?? ""}
        {...register("altCity", {
          required: "This field is required",
        })}
        error={errors.altCity?.message}
      />

      <FormField
        inputType={"text"}
        name={"altPostalCode"}
        placeholder={"postal code"}
        inputValue={watchedFields.altPostalCode ?? ""}
        {...register("altPostalCode", {
          required: "This field is required",
          onChange: (e) => {
            const digits = e.target.value.replace(/\D/g, "");
            setValue("altPostalCode", digits);
            e.target.value = digits;
          },
        })}
        error={errors.altPostalCode?.message}
      />

      <FormField
        inputType={"text"}
        name={"altPhone"}
        placeholder={"phone"}
        inputValue={watchedFields.altPhone ?? ""}
        inputMode={"numeric"}
        {...register("altPhone", {
          required: "This field is required",
          onChange: (e) => {
            const digits = e.target.value.replace(/\D/g, "");
            setValue("altPhone", digits);
            e.target.value = digits;
          },
        })}
        error={errors.altPhone?.message}
      />
    </section>
  );
}

export default AlternativeBillingForm;
