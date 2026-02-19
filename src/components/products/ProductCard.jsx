import { Link } from "react-router-dom";
import { formatCurrency } from "../../utils/numberFormatter";
import HeartIcon from "../icons/HeartIcon";
import { isDaysUpToTwoWeeks } from "../../utils/dateFormatters";
import ColorWidget from "../ColorWidget";
import useImageStatus from "../../hooks/useImageStatus";
import { SmallLoader } from "../Loaders";
import { ProductImgLoadMsg } from "./EmptyProduct";

function ProductCard({
  product,
  heightInSmallScreens = "max-sm:h-[15.3125rem]",
}) {
  const {
    id,
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

  const { imgLoading, imgLoadError } = useImageStatus(productImageUrl);

  const isProductNew = isDaysUpToTwoWeeks(created_at);

  return (
    <div className="flex h-fit w-full flex-col items-start gap-4">
      <div
        className={`relative w-full overflow-hidden ${heightInSmallScreens} sm:h-[27.375rem]`}
      >
        {imgLoading ? (
          <SmallLoader />
        ) : imgLoadError ? (
          <ProductImgLoadMsg />
        ) : (
          <>
            <Link
              to={`/product/${id}`}
              className="absolute top-0 left-0 h-full w-full"
              draggable="false"
            >
              <img
                src={productImageUrl}
                alt={`${productName} product image`}
                loading="lazy"
                className="h-full w-full object-center"
                draggable="false"
              />
            </Link>

            <div className="absolute top-2.5 left-2 md:top-6 md:left-4">
              {isProductNew && (
                <span className="bg-white px-4 py-2 text-sm">new</span>
              )}
            </div>

            <span className="icon absolute top-2.5 right-2 md:top-6 md:right-4">
              <HeartIcon className={"cursor-pointer"} />
            </span>
          </>
        )}
      </div>

      <div className="flex w-full items-start justify-between text-sm sm:text-base">
        <div className="flex w-full flex-col items-start gap-2">
          <div className="flex w-full flex-col justify-between sm:flex-row">
            <div className="flex w-full flex-col items-start gap-2">
              <Link to={`/product/${id}`} className="font-semibold">
                {productName}
              </Link>

              <p className="font-light">{productTag}</p>
            </div>

            <span className="self-end font-semibold">
              {formatCurrency(price)}
            </span>
          </div>

          <div className="flex items-center gap-2">
            {availableColors.map((color) => (
              <ColorWidget key={color} color={color} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
