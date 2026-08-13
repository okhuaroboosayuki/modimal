import { useEffect, useRef, useState } from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { useToggleFavorite } from "../../hooks/useToggleFavorite";
import { isDaysUpToTwoWeeks } from "../../utils/dateFormatters";
import { ProductImgLoadMsg } from "./EmptyProduct";
import { ProgressLink } from "../ProgressLinks";
import ColorWidget from "../ColorWidget";
import useImageStatus from "../../hooks/useImageStatus";
import ProductCardFavoriteButton from "./ProductCardFavoriteButton";
import ProductCardButton from "./ProductCardButton";
import useCartFunctions from "../../hooks/useCartFunctions";
import ProductCardDetails from "./ProductCardDetails";

function ProductCard({
  product,
  isRelatedProductPage = false,
  className = "",
}) {
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
  const { handleAddToCart } = useCartFunctions();

  const [hovered, setHovered] = useState(false);
  const [displayedImage, setDisplayedImage] = useState(
    productImages[0] || null,
  );
  const [outgoingImage, setOutgoingImage] = useState(null);
  const fadeTimeoutRef = useRef(null);

  useEffect(() => {
    return () => clearTimeout(fadeTimeoutRef.current);
  }, []);

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

  const goToImage = (nextImage) => {
    if (!nextImage || nextImage.url === displayedImage?.url) return;

    clearTimeout(fadeTimeoutRef.current);
    setOutgoingImage(displayedImage);
    setDisplayedImage(nextImage);

    // after the fade duration finishes, discard the old image completely
    fadeTimeoutRef.current = setTimeout(() => setOutgoingImage(null), 500);
  };

  const handleNextClick = () => {
    if (isLastImage) {
      handleAddToCart({
        product_id: id,
        quantity: 1,
        selected_size: availableSizes[0].size,
        selected_color: availableColors[0],
        product,
      });
      return;
    }
    goToImage(productImages[currentIndex + 1]);
  };

  return (
    <div
      className={`flex h-fit w-full flex-col items-start gap-4 ${className}`}
    >
      <div
        className={`relative aspect-[392/438] w-full overflow-hidden`}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        {imgLoading || isFavoriteLoading ? (
          <Skeleton
            height="100%"
            width="100%"
            containerClassName="absolute inset-0 h-full w-full leading-none"
            baseColor="var(--color-grayCB)"
            highlightColor="var(--color-grayDF)"
          />
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
                key={displayedImage?.url}
                src={displayedImage?.url}
                alt={`${productName} product image`}
                loading="lazy"
                draggable="false"
                className="absolute inset-0 z-0 h-full w-full object-cover object-center"
              />
              {outgoingImage && (
                <img
                  key={outgoingImage.url}
                  src={outgoingImage.url}
                  alt=""
                  aria-hidden="true"
                  draggable="false"
                  className="absolute inset-0 z-10 h-full w-full animate-[cardFadeOut_1000ms_ease-out_forwards] object-cover object-center"
                />
              )}
            </ProgressLink>
            <div className="absolute top-2.5 left-2 md:top-6 md:left-4">
              {isProductNew && (
                <span className="border border-gray-100 bg-white px-4 py-2 text-sm shadow-lg">
                  new
                </span>
              )}
            </div>
            <ProductCardFavoriteButton
              handleAddFavorite={handleAddFavorite}
              handleRemoveFavorite={handleRemoveFavorite}
              isProductInFavorites={isProductInFavorites}
            />

            {isRelatedProductPage === false && (
              <div className="absolute bottom-3 w-full px-1.5 sm:px-6">
                <ProductCardButton
                  product={product}
                  isOutOfStock={isOutOfStock}
                  isLastImage={isLastImage}
                  isSingleImage={productImages.length === 1}
                  hovered={hovered}
                  onNextClick={handleNextClick}
                />
              </div>
            )}
          </>
        )}
      </div>

      <ProductCardDetails
        id={id}
        productName={productName}
        productTag={productTag}
        price={price}
        colors={availableColors}
      />
    </div>
  );
}

export default ProductCard;
