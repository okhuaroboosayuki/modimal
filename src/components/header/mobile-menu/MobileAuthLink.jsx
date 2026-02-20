import UserIcon from "../../icons/UserIcon";
import { ProgressLink } from "../../ProgressLinks";

function MobileAuthLink({ text, link, onCloseModal, hasIcon = true }) {
  return (
    <ProgressLink
      to={link}
      onClick={onCloseModal}
      className="border-primary-600 flex w-full items-center justify-center gap-1 border py-2 min-[427px]:px-10"
    >
      {hasIcon && (
        <span className="icon">
          <UserIcon />
        </span>
      )}

      <span>{text}</span>
    </ProgressLink>
  );
}

export default MobileAuthLink;
