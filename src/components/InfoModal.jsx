import { RiCloseFill } from "react-icons/ri";

function InfoModal({ children, closeLoginModal }) {
  return (
    <div className="fixed top-0 left-0 z-50 flex h-full w-full items-center justify-center bg-black/30 px-7 backdrop-blur-sm md:px-24 lg:px-48 xl:px-60 2xl:px-80">
      <div className="relative flex flex-col items-center justify-center bg-white text-center capitalize">
        <span className="icon absolute top-4 left-4 md:top-6 md:left-6">
          <RiCloseFill className="cursor-pointer" onClick={closeLoginModal} />
        </span>

        {children}
      </div>
    </div>
  );
}

export default InfoModal;
