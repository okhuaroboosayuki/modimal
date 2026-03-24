import AuthButtonGroup from "./AuthButtonGroup";

function AuthButtonContainer({ closeModal, ref, isActive }) {
  return (
    <div className="absolute right-30">
      <AuthButtonGroup ref={ref} closeModal={closeModal} isActive={isActive} />
    </div>
  );
}

export default AuthButtonContainer;
