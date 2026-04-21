import { useLogOut } from "../../features/auth/useLogOut";
import { useUser } from "../../features/auth/useUser";
import AuthButton from "./AuthButton";

function AuthButtonGroup({ closeModal, ref, isActive }) {
  const { logout } = useLogOut();
  const { data } = useUser();
  const firstName = data?.user_metadata?.fullName.split(" ")[0];

  return (
    <div
      className={`${ref ? "flex-col px-10" : "border-t-grayCB flex-row border-t"} text-primary-600 flex w-full items-center justify-center gap-4 bg-white pt-[14.48px] pb-14 leading-6 capitalize max-[390px]:flex-col max-md:justify-between`}
      ref={ref}
    >
      {!isActive ? (
        <AuthButton text={"log in"} link={"/login"} onCloseModal={closeModal} />
      ) : (
        <>
          <h3 className="font-semibold capitalize">
            hi,
            <span className="text-warning text-lg font-medium">
              {" "}
              {firstName}
            </span>
          </h3>

          <AuthButton
            text={"log out"}
            onClick={() => {
              closeModal();
              logout();
            }}
            authenticated={isActive}
          />
        </>
      )}

      {!isActive && (
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
