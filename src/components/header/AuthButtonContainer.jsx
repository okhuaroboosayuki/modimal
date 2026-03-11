import AuthButtonGroup from "./AuthButtonGroup";

function AuthButtonContainer({ closeModal, ref }) {
  return (
    <div className="absolute right-30">
      <AuthButtonGroup ref={ref} closeModal={closeModal} />
    </div>
  );
}

export default AuthButtonContainer;
