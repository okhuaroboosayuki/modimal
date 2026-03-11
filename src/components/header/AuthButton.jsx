import { RiLogoutBoxLine } from "react-icons/ri";
import UserIcon from "../icons/UserIcon";
import { ProgressLink } from "../ProgressLinks";

function AuthButton({
  text,
  link,
  onCloseModal,
  onClick,
  hasIcon = true,
  authenticated = false,
}) {
  return (
    <>
      {!authenticated && (
        <ProgressLink
          to={link}
          onClick={onCloseModal}
          className="border-primary-600 hover:bg-primary transition-500-in-out flex w-full items-center justify-center gap-1 border py-2 hover:text-white min-[427px]:px-10 hover:[&>span.icon]:text-white"
        >
          {hasIcon && (
            <span className="icon text-[#202020] hover:text-white">
              <UserIcon />
            </span>
          )}

          <span>{text}</span>
        </ProgressLink>
      )}

      {authenticated && (
        <button
          className="border-primary-600 hover:bg-primary transition-500-in-out flex w-full cursor-pointer items-center justify-center gap-1 border py-2 hover:text-white min-[427px]:px-10 hover:[&>span.icon]:text-white"
          onClick={onClick}
        >
          {hasIcon && (
            <span className="icon text-[#202020] hover:text-white">
              <RiLogoutBoxLine />
            </span>
          )}

          <span>{text}</span>
        </button>
      )}
    </>
  );
}

export default AuthButton;
