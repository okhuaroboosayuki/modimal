import { useState } from "react";

function ProductImageCarousel({ productImages, productName }) {
  const [selectedImage, setSelectedImage] = useState(
    () => productImages?.[0] ?? null,
  );

  const displayedImage = selectedImage ?? productImages?.[0] ?? null;

  return (
    <section className="w-full lg:w-fit">
      {/* MOBILE: horizontal snap carousel */}
      <div className="lg:hidden">
        <div className="product-img-carousel flex w-full">
          {productImages?.map((image, index) => (
            <div
              key={index}
              className="product-img-carousel-card w-full shrink-0"
            >
              <img
                src={image.url}
                alt={`${productName} image ${index + 1}`}
                className="h-[480px] w-full object-center"
                draggable={false}
              />
            </div>
          ))}
        </div>
      </div>

      {/* DESKTOP: vertical thumbnails & main image */}
      <div className="hidden items-start gap-4 lg:flex">
        {/* thumbnail column */}
        <div className="flex h-[512px] flex-col gap-4 overflow-y-scroll">
          {productImages?.map((image, index) => (
            <img
              key={index}
              src={image.url}
              alt={`${productName} thumbnail ${index + 1}`}
              width={125}
              height={160}
              onClick={() => setSelectedImage(image)}
              className={`h-[160px] w-[125px] shrink-0 cursor-pointer object-center transition-opacity duration-200 ${
                displayedImage?.url === image.url ? "opacity-100" : "opacity-40"
              }`}
            />
          ))}
        </div>

        {/* main image */}
        {displayedImage && (
          <img
            src={displayedImage.url}
            alt={`${productName} - ${displayedImage.type}`}
            className="h-[512px] w-[427px] min-w-0 flex-1 object-center"
            draggable={false}
          />
        )}
      </div>
    </section>
  );
}

export default ProductImageCarousel;
