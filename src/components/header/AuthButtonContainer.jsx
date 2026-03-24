import AuthButtonGroup from "./AuthButtonGroup";

function AuthButtonContainer({
  closeModal,
  ref,
  isActive,
  isMobileMenu = false,
}) {
  return (
    <div className={isMobileMenu ? "w-full" : "absolute right-30"}>
      <AuthButtonGroup ref={ref} closeModal={closeModal} isActive={isActive} />
    </div>
  );
}

export default AuthButtonContainer;
