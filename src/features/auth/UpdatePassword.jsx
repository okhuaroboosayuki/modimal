import { useForm } from "react-hook-form";
import PasswordField from "./PasswordField";
import { useUpdateUser } from "./useUpdateUser";
import Button from "../../components/Button";

function UpdatePassword() {
  const {
    register,
    handleSubmit,
    watch,
    reset,
    getValues,
    formState: { errors },
  } = useForm();
  const { updateUser, isLoading } = useUpdateUser();

  const passwordValue = watch("password", "");
  const confirmPasswordValue = watch("confirmPassword", "");

  const onSubmit = ({ password }) => {
    updateUser({ password }, { onSettled: () => reset() });
  };

  return (
    <section className="flex w-full flex-col items-center justify-start gap-8 capitalize lg:mt-36">
      <h1 className="text-2xl font-medium lg:text-[2rem]">update password</h1>

      <section className="flex w-full flex-col items-center gap-2">
        <form
          className="flex w-full flex-col gap-2 px-5 lg:px-16 xl:px-20 2xl:px-32"
          onSubmit={handleSubmit(onSubmit)}
        >
          <PasswordField
            error={errors.password?.message}
            disabled={isLoading}
            passwordValue={passwordValue}
            {...register("password", {
              required: "This field is required",
              minLength: {
                value: 6,
                message: "Password must be a minimum of 6 characters",
              },
            })}
          />
          <PasswordField
            error={errors.confirmPassword?.message}
            name="confirm password"
            placeholder="confirm password"
            disabled={isLoading}
            passwordValue={confirmPasswordValue}
            {...register("confirmPassword", {
              required: "This field is required",
              validate: (value) =>
                getValues().password === value || "Passwords need to match",
            })}
          />

          <Button
            className={`${isLoading ? "bg-primary-750" : "bg-primary-600"} transition-500-in-out hover:bg-primary-750 text-white`}
            isDisabled={isLoading}
          >
            {isLoading ? "updating..." : "Update Password"}
          </Button>
        </form>
      </section>
    </section>
  );
}

export default UpdatePassword;
