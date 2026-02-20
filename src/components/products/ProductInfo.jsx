import { RiHeartLine, RiTruckLine } from "react-icons/ri";
import ColorWidget from "../ColorWidget";
import Button from "../Button";

function ProductInfo({ productName, description, availableColors }) {
  return (
    <section className="flex w-full flex-col items-start justify-start gap-6 px-5 sm:px-13 md:px-0 lg:w-fit">
      {/* title */}
      <div className="flex flex-col gap-4 sm:gap-8">
        <h1 className="text-neutral-black text-[32px] font-medium">
          {productName}
        </h1>

        <p className="text-base">{description}</p>
      </div>

      {/* color */}
      <div className="flex flex-col items-start gap-3">
        <span className="font-normal">Colors</span>

        <div className="flex gap-2">
          {availableColors?.map((color) => (
            <ColorWidget key={color} color={color} />
          ))}
        </div>
      </div>

      {/* size select & CTA button */}
      <div className="flex w-full flex-col gap-4 capitalize">
        <div className="flex w-full flex-col">
          <span className="text-gray86 self-end">Size guide</span>

          <select
            name="size"
            id="select-size"
            className="border-grayDF cursor-pointer border p-2 text-base font-medium outline-none focus:border-black"
          >
            <option value="">Size</option>
            <option value="S">Small</option>
            <option value="M">Medium</option>
            <option value="L">Large</option>
            <option value="XL">Extra Large</option>
          </select>
        </div>

        <Button
          styles={
            "bg-primary-600 w-full cursor-pointer py-3 text-base! text-white capitalize"
          }
        >
          add to cart
        </Button>
      </div>

      <div className="text-gray86 flex w-full flex-col-reverse items-center justify-between gap-1.5 capitalize sm:flex-row">
        <div className="flex items-center gap-1">
          <span className="icon">
            <RiTruckLine />
          </span>
          <span>easy return</span>
        </div>

        <div className="flex cursor-pointer items-center gap-1">
          <span className="icon">
            <RiHeartLine />
          </span>
          <span>add to wishlist</span>
        </div>
      </div>
    </section>
  );
}

export default ProductInfo;
