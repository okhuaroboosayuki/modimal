import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import { ProgressLink } from "../ProgressLinks";
import hero from "../../assets/images/hero_image.png";
import heroSrcSet from "../../assets/images/hero_image.png?w=640;768;1024;1440;1920&format=webp&as=srcset";
import heroBlur from "../../assets/images/hero_image.png?w=20&blur=2&format=webp&as=base64";

function Hero() {
  return (
    <section className="relative flex h-[551px] w-full items-end justify-start pb-31 pl-5 sm:h-[760px] md:pl-16 lg:pl-28">
      <LazyLoadImage
        src={hero}
        srcSet={heroSrcSet}
        sizes="100vw"
        placeholderSrc={heroBlur}
        effect="blur"
        alt="Two models in black fringe-trim fashion pieces posed beside a fireplace mantel"
        fetchPriority="high"
        threshold={100}
        delayMethod="debounce"
        delayTime={500}
        visibleByDefault
        className="absolute inset-0 h-full w-full object-cover"
        wrapperClassName="absolute inset-0 block h-full w-full"
        wrapperProps={{
          style: { transitionDelay: "1s" },
        }}
      />

      <div className="relative z-10 flex flex-col gap-6 capitalize">
        <div className="font-cabin flex flex-col gap-4 text-3xl text-white min-[1280px]:text-black">
          <em>elegance in simplicity,</em>
          <em>earth's harmony</em>
        </div>

        <ProgressLink
          to="/new-in"
          className="transition-500-in-out border-primary-600 sm:hover:bg-primary-600 bg-primary-600 border px-6 py-3.5 text-center text-sm font-medium text-white capitalize hover:bg-white hover:text-black sm:bg-white sm:text-black sm:hover:text-white"
        >
          new in
        </ProgressLink>
      </div>
    </section>
  );
}

export default Hero;
