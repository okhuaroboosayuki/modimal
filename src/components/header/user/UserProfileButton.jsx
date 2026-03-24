import { useEffect, useState } from "react";
import { useUser } from "../../../features/auth/useUser";
import Modal from "../../../features/modal/Modal";
import UserIcon from "../../icons/UserIcon";
import AuthButtonContainer from "../AuthButtonContainer";
import supabase from "../../../services/supabase";

function UserProfileButton() {
  const { isAuthenticated } = useUser();
  const [isRecoveringPassword, setIsRecoveringPassword] = useState(false);

  useEffect(() => {
    if (location.pathname === "/update-password") {
      setIsRecoveringPassword(true);
    } else {
      setIsRecoveringPassword(false);
    }
  }, []);

  useEffect(() => {
    const { data: authListener } = supabase.auth.onAuthStateChange(
      async (event) => {
        if (event === "PASSWORD_RECOVERY") {
          setIsRecoveringPassword(true);
        } else if (event === "USER_UPDATED") {
          setIsRecoveringPassword(false);
        } else if (event === "SIGNED_OUT") {
          setIsRecoveringPassword(false);
        }
      },
    );

    return () => {
      authListener.subscription.unsubscribe();
    };
  }, []);

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
