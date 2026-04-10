import { useState } from "react";
import { useToggleFavorite } from "../../hooks/useToggleFavorite";
import { isDaysUpToTwoWeeks } from "../../utils/dateFormatters";
import { formatCurrency } from "../../utils/numberFormatter";
import { addToGuestCart } from "../../utils/guestCart";
import { SmallLoader } from "../Loaders";
import { ProductImgLoadMsg } from "./EmptyProduct";
import { ProgressLink } from "../ProgressLinks";
import ColorWidget from "../ColorWidget";
import useImageStatus from "../../hooks/useImageStatus";
import ProductCardFavoriteButton from "./ProductCardFavoriteButton";
import ProductCardButton from "./ProductCardButton";

function ProductCard({ product }) {
  const {
    id,
    created_at,
    availableColors,
    price,
    productImages,
    productTag,
    productName,
    stockQuantity,
    availableSizes,
  } = product;
  const {
    handleAddFavorite,
    handleRemoveFavorite,
    isProductInFavorites,
    isFavoriteLoading,
  } = useToggleFavorite(id);

  const [hovered, setHovered] = useState(false);
  const [displayedImage, setDisplayedImage] = useState(
    productImages[0] || null,
  );

  const productImageUrl = productImages.find(
    (image) => image.type === "poster",
  ).url;
  const { imgLoading, imgLoadError } = useImageStatus(productImageUrl);

  const isProductNew = isDaysUpToTwoWeeks(created_at);
  const isOutOfStock = stockQuantity < 1;
  const currentIndex = productImages.findIndex(
    (img) => img.url === displayedImage?.url,
  );
  const isLastImage = currentIndex === productImages.length - 1;

  const handleNextClick = () => {
    if (isLastImage) {
      addToGuestCart({
        productId: id,
        quantity: 1,
        selectedSize: availableSizes[0].size,
        selectedColor: availableColors[0],
        product,
      });
      return;
    }
    setDisplayedImage(productImages[currentIndex + 1]);
  };

  return (
    <div className="flex h-fit w-full flex-col items-start gap-4">
      <div
        className={`relative h-[20rem] w-full overflow-hidden sm:h-[27.375rem]`}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        {imgLoading || isFavoriteLoading ? (
          <SmallLoader />
        ) : imgLoadError ? (
          <ProductImgLoadMsg />
        ) : (
          <>
            <ProgressLink
              to={`/product/${id}`}
              className="absolute top-0 left-0 h-full w-full"
              draggable="false"
            >
              <img
                src={displayedImage?.url}
                alt={`${productName} product image`}
                loading="lazy"
                className="h-full w-full object-center"
                draggable="false"
              />
            </ProgressLink>
            <div className="absolute top-2.5 left-2 md:top-6 md:left-4">
              {isProductNew && (
                <span className="bg-white px-4 py-2 text-sm">new</span>
              )}
            </div>
            <ProductCardFavoriteButton
              handleAddFavorite={handleAddFavorite}
              handleRemoveFavorite={handleRemoveFavorite}
              isProductInFavorites={isProductInFavorites}
            />

            <div className="absolute bottom-3 w-full px-3 sm:px-6">
              <ProductCardButton
                product={product}
                isOutOfStock={isOutOfStock}
                isLastImage={isLastImage}
                isSingleImage={productImages.length === 1}
                hovered={hovered}
                onNextClick={handleNextClick}
              />
            </div>
          </>
        )}
      </div>

      <div className="flex w-full items-start justify-between text-sm sm:text-base">
        <div className="flex w-full flex-col items-start gap-2">
          <div className="flex w-full flex-col justify-between sm:flex-row">
            <div className="flex w-full flex-col items-start gap-2">
              <ProgressLink to={`/product/${id}`} className="font-semibold">
                {productName}
              </ProgressLink>

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
