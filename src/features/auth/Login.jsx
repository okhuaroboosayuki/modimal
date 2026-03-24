import { useLocation } from "react-router-dom";
import { useForm } from "react-hook-form";
import { ProgressLink } from "../../components/ProgressLinks";
import { useLogin } from "./useLogin";
import Button from "../../components/Button";
import SocialMediaAuthIcons from "../../components/auth/SocialMediaAuthIcons";
import FormField from "./FormField";
import PasswordField from "./PasswordField";
import { useState } from "react";
import LoginModal from "./LoginModal";

function Login() {
  const location = useLocation();
  const accountCreated = location.state?.accountCreated !== undefined || false;
  const [isModalOpen, setIsModalOpen] = useState(accountCreated);

  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm();
  const { login, isLoading } = useLogin();

  const passwordValue = watch("password", "");
  const emailValue = watch("email", "");

  const onSubmit = ({ email, password }) => {
    login({ email, password }, { onSettled: () => reset() });
  };

  const closeLoginModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      {isModalOpen && <LoginModal closeLoginModal={closeLoginModal} />}

      <section className="flex w-full flex-col items-center justify-start gap-8 capitalize lg:mt-36">
        <h1 className="text-2xl font-medium lg:text-[2rem]">log in</h1>

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

            <PasswordField
              error={errors.password?.message}
              disabled={isLoading}
              passwordValue={passwordValue}
              {...register("password", {
                required: "This field is required",
              })}
            />

            <ProgressLink
              to={"/reset-password"}
              className="text-primary mb-6 hover:underline"
            >
              forgot your password?
            </ProgressLink>

            <Button
              styles={`${isLoading ? "bg-primary-750" : "bg-primary-600"} transition-500-in-out hover:bg-primary-750 text-white`}
              isDisabled={isLoading}
            >
              {isLoading ? "logging in..." : "log in"}
            </Button>
          </form>

          <section className="mt-8 flex flex-col items-center gap-4 px-5 capitalize lg:px-16 xl:px-20 2xl:px-32">
            <SocialMediaAuthIcons />

            <div className="[&>a]:text-primary [&>a]:hover:text-primary-900 mt-2 text-center text-sm capitalize [&>a]:hover:underline">
              new to modimal?{" "}
              <ProgressLink to={"/create-account"}>
                create an account
              </ProgressLink>
            </div>
          </section>
        </section>
      </section>
    </>
  );
}

export default Login;
