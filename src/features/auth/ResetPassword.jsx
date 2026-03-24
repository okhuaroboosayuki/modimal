import { useForm } from "react-hook-form";
import FormField from "./FormField";
import Button from "../../components/Button";
import { useSendResetPassword } from "./useSendResetPassword";
import { ProgressLink } from "../../components/ProgressLinks";

function ResetPassword() {
  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm();
  const { sendPasswordResetLink, isLoading } = useSendResetPassword();

  const emailValue = watch("email", "");

  const onSubmit = ({ email }) => {
    sendPasswordResetLink({ email }, { onSettled: () => reset() });
  };

  return (
    <section className="flex w-full flex-col items-center justify-start gap-8 capitalize lg:mt-36">
      <h1 className="text-2xl font-medium lg:text-[2rem]">get reset link</h1>

      <section className="flex w-full flex-col items-center gap-2">
        <form
          className="flex w-full flex-col gap-2 px-5 lg:px-16 xl:px-20 2xl:px-32"
          onSubmit={handleSubmit(onSubmit)}
        >
          <FormField
            inputType={"email"}
            name={"email"}
            placeholder={"email"}
            inputValue={emailValue}
            {...register("email", {
              required: "This field is required",
            })}
            error={errors.email?.message}
            disabled={isLoading}
          />

          <ProgressLink
            to={"/login"}
            className="text-primary mb-6 w-fit hover:underline"
          >
            remember your password?
          </ProgressLink>

          <Button
            styles={`${isLoading ? "bg-primary-750" : "bg-primary-600"} transition-500-in-out hover:bg-primary-750 text-white`}
            isDisabled={isLoading}
          >
            {isLoading ? "sending..." : "Send Reset Link"}
          </Button>
        </form>
      </section>
    </section>
  );
}

export default ResetPassword;
