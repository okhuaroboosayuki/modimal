import { Link } from "react-router-dom";
import UserIcon from "../../icons/UserIcon";

function MobileAuthLink({ text, link, hasIcon = true }) {
  return (
    <Link
      to={link}
      className="border-primary-600 flex w-full items-center justify-center gap-1 border py-2 min-[427px]:px-10"
    >
      {hasIcon && (
        <span className="icon">
          <UserIcon />
        </span>
      )}

      <span>{text}</span>
    </Link>
  );
}

export default MobileAuthLink;
