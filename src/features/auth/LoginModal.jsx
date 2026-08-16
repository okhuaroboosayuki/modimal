import { RiCloseFill } from "react-icons/ri";
import { useNavigate } from "react-router-dom";
import InfoModal from "../../components/InfoModal";

function LoginModal({ closeLoginModal }) {
  const navigate = useNavigate();

  return (
    <InfoModal closeLoginModal={closeLoginModal}>
      <div className="flex flex-col items-center justify-center gap-10 px-11 py-16 text-sm sm:text-lg md:px-20 xl:px-32">
        <h1 className="text-neutral-black text-lg font-semibold sm:text-3xl">
          verify your email address
        </h1>

        <p>
          we've sent an email to verify your email address and activate your
          account. the link in the email will expire in 24 hours
        </p>

        <p>
          <span
            className="text-primary cursor-pointer underline"
            onClick={() => navigate(-1)}
          >
            click here
          </span>{" "}
          if you did not receive an email or would like to change the email
          address you registered with.
        </p>
      </div>
    </InfoModal>
  );
}

export default LoginModal;
