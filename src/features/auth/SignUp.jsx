import { useForm } from "react-hook-form";
import { ProgressLink } from "../../components/ProgressLinks";
import Button from "../../components/Button";
import SocialMediaAuthIcons from "../../components/auth/SocialMediaAuthIcons";
import FormField from "./FormField";
import PasswordField from "./PasswordField";
import { useSignUp } from "./useSignUp";

function SignUp() {
  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm();
  const { signUp, isLoading } = useSignUp();

  const passwordValue = watch("password", "");
  const firstNameValue = watch("firstName", "");
  const lastNameValue = watch("lastName", "");
  const emailValue = watch("email", "");

  const onSubmit = ({ firstName, lastName, email, password }) => {
    signUp(
      { email, password, fullName: `${firstName} ${lastName}` },
      { onSettled: () => reset() },
    );
  };

  return (
    <section className="flex w-full flex-col items-center justify-start gap-8 capitalize lg:mt-36">
      <h1 className="text-2xl font-medium lg:text-[2rem]">create account</h1>

      <section className="flex w-full flex-col items-center gap-2">
        <form
          className="flex w-full flex-col gap-2 px-5 lg:px-16 xl:px-20 2xl:px-32"
          onSubmit={handleSubmit(onSubmit)}
        >
          <FormField
            inputType={"text"}
            name={"firstName"}
            placeholder={"first name"}
            inputValue={firstNameValue}
            {...register("firstName", { required: "This field is required" })}
            error={errors.firstName?.message}
            disabled={isLoading}
          />

          <FormField
            inputType={"text"}
            name={"lastName"}
            placeholder={"last name"}
            inputValue={lastNameValue}
            {...register("lastName", { required: "This field is required" })}
            error={errors.lastName?.message}
            disabled={isLoading}
          />

          <FormField
            inputType={"email"}
            name={"email"}
            placeholder={"email"}
            inputValue={emailValue}
            {...register("email", {
              required: "This field is required",
              pattern: {
                value: /\S+@\S+\.\S+/,
                message: "Provide a valid email address",
              },
            })}
            error={errors.email?.message}
            disabled={isLoading}
          />

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

          <Button
            styles={`${isLoading ? "bg-primary-750" : "bg-primary-600"} transition-500-in-out hover:bg-primary-750 text-white`}
            isDisabled={isLoading}
          >
            {isLoading ? "registering..." : "register now"}
          </Button>
        </form>

        <section className="flex flex-col items-center gap-4 px-5 capitalize lg:px-16 xl:px-20 2xl:px-32">
          <div className="flex items-center text-sm">
            <span>already have an account?</span>

            <ProgressLink
              to={"/login"}
              className={"text-primary hover:text-primary-750 mx-[27px] my-2"}
            >
              log in
            </ProgressLink>
          </div>

          <SocialMediaAuthIcons />

          <div className="[&>span]:text-primary [&>span]:hover:text-primary-900 mt-2 text-center text-sm capitalize [&>span]:cursor-pointer [&>span]:underline">
            by clicking register now, you agree to our{" "}
            <span>terms & conditions</span> and <span>privacy policy</span>
          </div>
        </section>
      </section>
    </section>
  );
}

export default SignUp;
