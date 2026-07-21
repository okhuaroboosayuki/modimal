import { TbArrowBackUp } from "react-icons/tb";
import { useNavigate } from "react-router-dom";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import fisherman from "../assets/images/man_fishing.png";
import fishermanBlur from "../assets/images/man_fishing.png?w=20&blur=2&format=webp&as=base64";
import fishermanSrcSet from "../assets/images/man_fishing.png?w=320;480;768;1024;1440&format=webp&as=srcset";
import particles from "../assets/images/sea_particles.png";
import waves from "../assets/images/sea_wave.png";
import wavesBlur from "../assets/images/sea_wave.png?w=20&blur=2&format=webp&as=base64";
import wavesSrcSet from "../assets/images/sea_wave.png?w=320;480;768;1024;1440&format=webp&as=srcset";
import Header from "../components/header/Header";
import Footer from "../components/Footer";
import SEO from "../components/SEO";

function NotFound() {
  const navigate = useNavigate();

  return (
    <>
      <SEO
        title={"404 - Page Not Found"}
        description="The page you are looking for does not exist. Please check the URL or return to the homepage."
        url={"*"}
      />

      <Header />

      <section className="flex h-screen w-full items-center justify-center bg-white px-10 py-10 sm:px-20 lg:px-60">
        <div className="relative flex h-full w-full flex-col items-center gap-10 sm:justify-between">
          <div className="flex w-full flex-col items-center justify-center gap-2 capitalize">
            <h1 className="text-neutral-black text-6xl font-black">
              <span className="text-[4rem]">o</span>
              <span>ops</span>
            </h1>

            <p className="text-base font-medium sm:text-lg">
              the page does not exist
            </p>
          </div>

          <div className="hidden sm:block">
            <LazyLoadImage
              src={fisherman}
              srcSet={fishermanSrcSet}
              placeholderSrc={fishermanBlur}
              fetchPriority="high"
              visibleByDefault={true}
              alt={"a man fishing on a boat with a fishing hook"}
              sizes="(max-width:780px)300px,380px"
              className={
                "absolute top-[5%] left-[10%] z-20 md:left-[20%] lg:left-[30%]"
              }
              wrapperClassName="block w-full h-full"
            />
            <LazyLoadImage
              src={waves}
              srcSet={wavesSrcSet}
              placeholderSrc={wavesBlur}
              fetchPriority="high"
              visibleByDefault={true}
              alt={"sea wave illustration"}
              sizes="(max-width:768px)500px,550px"
              className={
                "absolute top-[27%] left-0 sm:top-[18%] sm:left-[8%] lg:left-[20%]"
              }
              wrapperClassName="block w-full h-full"
            />
            <img
              src={particles}
              alt="sea particles on top the sea"
              className="absolute top-[40%] left-0 z-20 lg:bottom-[25%] lg:left-[20%]"
              loading="lazy"
            />
          </div>

          <button
            className="border-b-neutral-black top-[70%] flex cursor-pointer items-center justify-center gap-2 border-b pb-2 text-lg font-medium capitalize sm:absolute lg:bottom-[18%]"
            onClick={() => navigate("/")}
          >
            <span className="icon">
              <TbArrowBackUp />
            </span>

            <span>go home</span>
          </button>
        </div>
      </section>

      <Footer />
    </>
  );
}

export default NotFound;
