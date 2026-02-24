import { FaRegEyeSlash } from "react-icons/fa6";
import { ProgressLink } from "../../components/ProgressLinks";
import Button from "../../components/Button";
import Input from "../../components/Input";
import AppleIcon from "../../components/icons/AppleIcon";
import GoogleIcon from "../../components/icons/GoogleIcon";
import FacebookIcon from "./../../components/icons/FacebookIcon";

function SignUp() {
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <section className="flex w-full flex-col items-center justify-start gap-8 capitalize lg:mt-36">
      <h1 className="text-2xl font-medium lg:text-[2rem]">create account</h1>

      <section className="flex w-full flex-col items-center gap-2">
        <form
          className="flex w-full flex-col gap-2 px-5 lg:px-16 xl:px-20 2xl:px-32"
          onSubmit={handleSubmit}
        >
          <Input
            type={"text"}
            name={"firstName"}
            placeholder={"first name"}
            customStyle={
              "w-full border border-gray60 placeholder:capitalize px-4 py-2 focus:border-primary-300"
            }
          />
          <Input
            type={"text"}
            name={"lastName"}
            placeholder={"last name"}
            width={"w-full"}
            customStyle={
              "border border-gray60 placeholder:capitalize px-4 py-2 focus:border-primary-300"
            }
          />
          <Input
            type={"email"}
            name={"email"}
            placeholder={"email"}
            customStyle={
              "w-full border border-gray60 placeholder:capitalize px-4 py-2 focus:border-primary-300"
            }
          />
          <div className="border-gray60 focus-within:border-primary-300 flex border px-4 py-2">
            <Input
              type={"password"}
              name={"password"}
              placeholder={"password"}
              customStyle={"w-full placeholder:capitalize"}
            />
            <span className="icon cursor-pointer">
              <FaRegEyeSlash fill="#606060" />
            </span>
          </div>

          <Button
            styles={
              "bg-primary-600 transition-500-in-out hover:bg-primary-750 text-white"
            }
          >
            register now
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

          <span>or</span>

          <div className="mt-2 flex items-center gap-[17px]">
            <span className="cursor-pointer">
              <AppleIcon width={35} height={35} />
            </span>
            <span className="cursor-pointer">
              <GoogleIcon width={35} height={35} />
            </span>
            <span className="cursor-pointer">
              <FacebookIcon width={35} height={35} />
            </span>
          </div>

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
