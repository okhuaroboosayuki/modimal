import { useState } from "react";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa6";
import Input from "../../components/Input";

function PasswordField({ error, passwordValue = "", disabled, ...props }) {
  const [isVisible, setIsVisible] = useState(false);

  const handlePasswordVisibility = () => {
    if (!passwordValue) return;
    setIsVisible((prev) => !prev);
  };

  return (
    <div className="flex w-full flex-col items-start gap-1">
      <div
        className={`${error ? "border-error" : "border-gray60 focus:border-primary-300"} flex w-full border px-4 py-2`}
      >
        <Input
          type={!isVisible ? "password" : "text"}
          name={"password"}
          placeholder={"password"}
          customStyle={"w-full placeholder:capitalize"}
          disabled={disabled}
          {...props}
        />
        <span
          className="icon cursor-pointer"
          onClick={handlePasswordVisibility}
        >
          {!isVisible ? (
            <FaRegEyeSlash fill="#606060" />
          ) : (
            <FaRegEye fill="#606060" />
          )}
        </span>
      </div>
      {error && <span className="text-error text-xs">{error}</span>}
    </div>
  );
}

export default PasswordField;
