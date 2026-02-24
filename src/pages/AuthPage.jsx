import { Outlet } from "react-router-dom";
import authImage from "/images/authImage.png";

function AuthPage() {
  return (
    <section className="flex w-full flex-col justify-between gap-6 pt-8 pb-12 sm:px-5 md:px-14 lg:flex-row lg:px-20 xl:px-[108px]">
      <div className="h-[218px] w-full sm:h-[450px] lg:h-[837px]">
        <img
          src={authImage}
          alt="Model wearing white long-sleeve dress"
          width={600}
          className="h-full w-full object-cover object-center"
        />
      </div>

      <Outlet />
    </section>
  );
}

export default AuthPage;
