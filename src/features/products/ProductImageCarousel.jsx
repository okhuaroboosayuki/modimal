import { useState } from "react";

function ProductImageCarousel({ productImages, productName }) {
  const [selectedImage, setSelectedImage] = useState(null);
  const [touchStart, setTouchStart] = useState(null);
  const [touchEnd, setTouchEnd] = useState(null);

  const displayedImage =
    selectedImage ||
    (productImages && productImages.length > 0 ? productImages[0] : null);

  const handleImageSelect = (image) => {
    setSelectedImage(image);
  };

  const minSwipeDistance = 50;

  const onTouchStart = (e) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const onTouchMove = (e) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return;

    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;

    if (!productImages || productImages.length === 0) return;

    const currentIndex = productImages.findIndex(
      (img) => img.url === displayedImage?.url,
    );

    // Swipe left - next image
    if (isLeftSwipe && currentIndex < productImages.length - 1) {
      setSelectedImage(productImages[currentIndex + 1]);
    }

    // Swipe right - previous image
    if (isRightSwipe && currentIndex > 0) {
      setSelectedImage(productImages[currentIndex - 1]);
    }
  };

  const getCurrentImageIndex = () => {
    if (!productImages || !displayedImage) return 0;
    return productImages.findIndex((img) => img.url === displayedImage.url);
  };

  return (
    <section className="flex w-full items-center justify-center lg:w-fit">
      <div className="flex h-[512px] items-center justify-center gap-4">
        {/* image carousel */}
        <div className="hidden h-full w-fit flex-col gap-4 overflow-y-scroll md:flex">
          {productImages &&
            productImages.map((image, index) => (
              <img
                src={image.url}
                alt={`${productName}'s ${image.type} image`}
                width={125}
                height={160}
                key={index}
                onClick={() => handleImageSelect(image)}
                className={`cursor-pointer transition-opacity duration-200 ${
                  displayedImage && displayedImage.url === image.url
                    ? "opacity-100"
                    : displayedImage
                      ? "opacity-50"
                      : "opacity-100"
                }`}
              />
            ))}
        </div>

        <div className="flex w-full flex-col gap-2">
          <div
            className="flex w-full touch-pan-y"
            onTouchStart={onTouchStart}
            onTouchMove={onTouchMove}
            onTouchEnd={onTouchEnd}
          >
            {displayedImage && (
              <img
                src={displayedImage.url}
                alt={`${productName}'s ${displayedImage.type} image`}
                className="transition-500-in-out h-[480px] w-[427px] select-none sm:h-[512px]"
                draggable={false}
              />
            )}
          </div>

          <div className="flex items-center gap-1.5 self-center md:hidden">
            {productImages &&
              productImages.map((_, index) => (
                <span
                  key={index}
                  className={`transition-500-in-out rounded-full ${
                    getCurrentImageIndex() === index
                      ? "bg-grayDF h-3 w-3"
                      : "bg-grayAD h-2 w-2"
                  }`}
                ></span>
              ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default ProductImageCarousel;
