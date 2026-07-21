import { Outlet } from "react-router-dom";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/black-and-white.css";
import authImage from "../assets/images/authImage.png";
import authImageSrcSet from "../assets/images/authImage.png?w=640;768;1024;1440;1920&format=webp&as=srcset";
import authImageBlur from "../assets/images/authImage.png?w=20&blur=2&format=webp&as=base64";

function AuthPage() {
  return (
    <section className="flex w-full flex-col justify-between gap-6 pt-8 pb-12 sm:px-5 md:px-14 lg:flex-row lg:px-20 xl:px-[108px]">
      <div className="h-[218px] w-full sm:h-[450px] lg:h-[837px]">
        <LazyLoadImage
          src={authImage}
          srcSet={authImageSrcSet}
          placeholderSrc={authImageBlur}
          sizes="100vw"
          alt=""
          effect="black-and-white"
          fetchPriority="high"
          threshold={100}
          delayMethod="debounce"
          delayTime={500}
          visibleByDefault
          className="h-full w-full object-cover object-center"
          wrapperClassName="h-full inset-0 w-full"
          wrapperProps={{
            style: { transitionDelay: "1s" },
          }}
        />
      </div>

      <Outlet />
    </section>
  );
}

export default AuthPage;
