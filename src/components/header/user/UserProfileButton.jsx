import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { useUser } from "../../../features/auth/useUser";
import Modal from "../../../features/modal/Modal";
import UserIcon from "../../icons/UserIcon";
import AuthButtonContainer from "../AuthButtonContainer";

function UserProfileButton() {
  const location = useLocation();
  const { isAuthenticated } = useUser();
  const [isRecoveringPassword, setIsRecoveringPassword] = useState(false);

  useEffect(() => {
    if (location.pathname === "/update-password") {
      setIsRecoveringPassword(true);
    } else {
      setIsRecoveringPassword(false);
    }
  }, [location.pathname]);

  const isActive = isAuthenticated && !isRecoveringPassword;

  return (
    <>
      <Modal.Open opens={"user-profile"}>
        <li className={`icon hidden lg:block ${isActive && "bg-grayCB p-0.5"}`}>
          <UserIcon className="cursor-pointer" />
        </li>
      </Modal.Open>
      <Modal.Window
        name={"user-profile"}
        containerId={"header"}
        styles={"profile-button-modal"}
      >
        <AuthButtonContainer isActive={isActive} />
      </Modal.Window>
    </>
  );
}

export default UserProfileButton;
