import { ProgressLink } from "../ProgressLinks";

function Socials() {
  return (
    <div className="flex w-full flex-col justify-center gap-6 px-6 pb-12 capitalize md:px-14 lg:px-28">
      <h1 className="text-2xl font-semibold md:text-[32px]">
        follow us @modimal
      </h1>

      <div className="grid grid-cols-2 md:h-[751px]">
        <div className="overflow-hidden">
          <img
            src="/images/tall_lady_on_beige_skirt.png"
            alt="an image of a lady on beige skirt"
            className="h-full w-full object-cover object-center"
          />
        </div>

        <div className="grid w-full grid-cols-1 grid-rows-2 md:grid-cols-2">
          <img
            src="/images/lady_on_bycircle.png"
            alt="an image of a lady on bicycle"
            className="h-full w-full object-cover object-center"
          />
          <img
            src="/images/lady_on_black_coat.png"
            alt="an image of a lady on black coat"
            className="h-full w-full object-cover object-center max-md:hidden"
          />

          <img
            src="/images/lady_on_longer_coat.png"
            alt="black and white image of a lady on longer coat"
            className="h-full w-full object-cover object-center"
          />
          <img
            src="/images/lady_on_white_shirt.png"
            alt="an image of a lady on white shirt"
            className="h-full w-full object-cover object-center max-md:hidden"
          />
        </div>
      </div>
    </div>
  );
}

export default Socials;
