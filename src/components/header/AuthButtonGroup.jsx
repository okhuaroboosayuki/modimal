import { useLogOut } from "../../features/auth/useLogOut";
import { useUser } from "../../features/auth/useUser";
import AuthButton from "./AuthButton";

function AuthButtonGroup({ closeModal, ref }) {
  const { isAuthenticated } = useUser();
  const { logout } = useLogOut();

  return (
    <div
      className={`${ref ? "flex-col px-10" : "border-t-grayCB flex-row border-t"} text-primary-600 flex w-full items-center justify-center gap-4 bg-white pt-[14.48px] pb-14 leading-6 capitalize max-[390px]:flex-col max-md:justify-between`}
      ref={ref}
    >
      {!isAuthenticated ? (
        <AuthButton text={"log in"} link={"/login"} onCloseModal={closeModal} />
      ) : (
        <AuthButton
          text={"log out"}
          onClick={() => {
            closeModal();
            logout();
          }}
          authenticated={isAuthenticated}
        />
      )}

      {!isAuthenticated && (
        <AuthButton
          text={"create account"}
          link={"/create-account"}
          hasIcon={false}
          onCloseModal={closeModal}
        />
      )}
    </div>
  );
}

export default AuthButtonGroup;
