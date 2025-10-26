import { formatCurrency } from "../../utils/numberFormatter";
import HeartIcon from "../icons/HeartIcon";
import { isDaysUpToTwoWeeks } from "../../utils/dateFormatters";

function ProductCard({ product }) {
  const {
    created_at,
    availableColors,
    price,
    productImages,
    productTag,
    productName,
  } = product;

  const productImageUrl = productImages.find(
    (image) => image.type === "poster",
  ).url;

  const isProductNew = isDaysUpToTwoWeeks(created_at);

  return (
    <div className="flex h-fit w-full flex-col items-start gap-4">
      <div className="relative w-full overflow-hidden max-sm:h-[15.3125rem] sm:h-[27.375rem]">
        <img
          src={productImageUrl}
          alt={`${productName} product image`}
          loading="lazy"
          className="absolute top-0 left-0 h-full w-full object-center"
        />

        <div className="relative flex items-center justify-between px-2 pt-2 md:px-6 md:pt-6">
          <div>
            {isProductNew && (
              <span className="bg-white px-4 py-2 text-sm">new</span>
            )}
          </div>

          <span className="icon">
            <HeartIcon className={"cursor-pointer"} />
          </span>
        </div>
      </div>

      <div className="flex w-full items-start justify-between text-sm sm:text-base">
        <div className="flex w-full flex-col items-start gap-2">
          <div className="flex w-full flex-col justify-between sm:flex-row">
            <div className="flex w-full flex-col items-start gap-2">
              <h2 className="font-semibold">{productName}</h2>

              <p className="font-light">{productTag}</p>
            </div>

            <span className="self-end font-semibold">
              {formatCurrency(price)}
            </span>
          </div>

          <div className="flex items-center gap-2">
            {availableColors.map((color) => (
              <span
                key={color}
                className="h-6 w-6 rounded-[100%]"
                style={{ backgroundColor: color, border: `1px solid #606060` }}
              ></span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
