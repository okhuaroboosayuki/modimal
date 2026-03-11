import { useUser } from "../../../features/auth/useUser";
import Modal from "../../../features/modal/Modal";
import UserIcon from "../../icons/UserIcon";
import AuthButtonContainer from "../AuthButtonContainer";

function UserProfileButton() {
  const { isAuthenticated } = useUser();

  return (
    <>
      <Modal.Open opens={"user-profile"}>
        <li
          className={`icon hidden lg:block ${isAuthenticated && "bg-grayCB p-0.5"}`}
        >
          <UserIcon className="cursor-pointer" />
        </li>
      </Modal.Open>
      <Modal.Window
        name={"user-profile"}
        containerId={"header"}
        styles={"profile-button-modal"}
      >
        <AuthButtonContainer />
      </Modal.Window>
    </>
  );
}

export default UserProfileButton;
