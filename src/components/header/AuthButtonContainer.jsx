import AuthButtonGroup from "./AuthButtonGroup";

function AuthButtonContainer({
  closemodal,
  ref,
  isActive,
  isMobileMenu = false,
}) {
  return (
    <div className={isMobileMenu ? "w-full" : "absolute right-30"}>
      <AuthButtonGroup ref={ref} closeModal={closemodal} isActive={isActive} />
    </div>
  );
}

export default AuthButtonContainer;
