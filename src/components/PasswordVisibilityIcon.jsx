import { FaRegEye, FaRegEyeSlash } from "react-icons/fa6";

function PasswordVisibilityIcon({ handleClick, isVisible }) {
  return (
    <span className="icon cursor-pointer" onClick={handleClick}>
      {!isVisible ? (
        <FaRegEyeSlash fill="#606060" />
      ) : (
        <FaRegEye fill="#606060" />
      )}
    </span>
  );
}

export default PasswordVisibilityIcon;
