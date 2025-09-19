import { formatCurrency } from "../../utils/numberFormatter";
import HeartIcon from "../icons/HeartIcon";

function ProductCard({ product }) {
  const { availableColors, price, productImages, productTag, productName } =
    product;
  const productImageUrl = productImages.find(
    (image) => image.type === "poster",
  ).url;

  return (
    <div className="flex h-fit w-[26rem] flex-col items-start gap-4">
      <div className="relative h-[27.375rem] w-full overflow-hidden">
        <img
          src={productImageUrl}
          alt={`${productName} product image`}
          loading="lazy"
          className="absolute top-0 left-0 h-full w-full object-center"
        />

        <div className="relative flex items-center justify-between px-6 pt-6">
          <span className="bg-white px-4 py-2 text-sm">new</span>

          <span className="icon">
            <HeartIcon className={"cursor-pointer"} />
          </span>
        </div>
      </div>

      <div className="flex w-full items-start justify-between text-base">
        <div className="flex flex-col items-start gap-2">
          <h2 className="font-semibold">{productName}</h2>

          <p className="font-light">{productTag}</p>

          <div className="flex items-center gap-2">
            {availableColors.map((color) => (
              <span
                key={color}
                className="h-6 w-6 rounded-[100%]"
                style={{ backgroundColor: color, border: `1px solid ${color}` }}
              ></span>
            ))}
          </div>
        </div>

        <span className="font-semibold">{formatCurrency(price)}</span>
      </div>
    </div>
  );
}

export default ProductCard;
