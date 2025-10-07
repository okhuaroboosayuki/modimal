import { TbArrowBackUp } from "react-icons/tb";
import { useNavigate } from "react-router-dom";
import fisherman from "/images/man_fishing.png";
import particles from "/images/sea_particles.png";
import waves from "/images/sea_wave.png";

function NotFound() {
  const navigate = useNavigate();

  return (
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
          <img
            src={fisherman}
            alt="a man fishing on a boat with a fishing hook"
            className="absolute top-[5%] left-[10%] z-20 w-[300px] sm:w-[380px] md:left-[20%] lg:left-[30%]"
            loading="lazy"
          />
          <img
            src={waves}
            alt="sea wave illustration"
            className="absolute top-[27%] left-0 w-[500px] sm:top-[18%] sm:left-[8%] md:w-[550px] lg:left-[20%]"
            loading="lazy"
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
  );
}

export default NotFound;
