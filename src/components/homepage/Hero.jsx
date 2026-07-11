import { ProgressLink } from "../ProgressLinks";

function Hero() {
  return (
    <section
      className="flex h-[551px] w-full items-end justify-start pb-31 pl-5 sm:h-[660px] sm:pl-28"
      style={{
        backgroundImage: "url('/images/hero_image.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="flex flex-col gap-6 capitalize">
        <div className="font-cabin flex flex-col gap-4 text-3xl text-white min-[1170px]:text-black">
          <em>elegance in simplicity,</em>
          <em>earth's harmony</em>
        </div>

        <ProgressLink
          to={"/new-in"}
          className={
            "transition-500-in-out border-primary-100 hover:bg-primary-600 border bg-white px-6 py-3.5 text-center text-sm font-medium capitalize hover:text-white"
          }
        >
          new in
        </ProgressLink>
      </div>
    </section>
  );
}

export default Hero;
