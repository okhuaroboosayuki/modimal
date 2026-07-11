import { ProgressLink } from "../ProgressLinks";

function Sustainability() {
  return (
    <div className="relative mb-20 w-full">
      <img
        src="/images/home-sustainability.png"
        alt="floral imagery"
        loading="lazy"
        className="h-[526px] w-full object-center max-lg:object-cover"
      />

      <div className="absolute top-[75%] right-0 bottom-4 flex w-full flex-col items-end justify-center gap-3 px-3 capitalize sm:right-2 lg:top-2/3 lg:right-20">
        <p className="text-primary-800 text-base text-pretty sm:w-[475px] sm:text-[20px]">
          stylish sustainability in clothing promotes eco-friendly choices for a
          greater future
        </p>

        <ProgressLink
          to={"/sustainability"}
          className={
            "transition-500-in-out border-primary-100 hover:bg-primary-600 border bg-white px-11 py-3.5 text-center text-sm font-medium capitalize hover:text-white"
          }
        >
          sustainability
        </ProgressLink>
      </div>
    </div>
  );
}

export default Sustainability;
