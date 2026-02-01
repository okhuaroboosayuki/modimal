import { useState } from "react";
import { Link } from "react-router-dom";
import ColorWidget from "../../components/ColorWidget";
import { RiHeartLine, RiTruckLine } from "react-icons/ri";
import { LoadingSpinner } from "../../components/Loaders";

function Product({ data, loader }) {
  const [selectedImage, setSelectedImage] = useState(null);
  const [touchStart, setTouchStart] = useState(null);
  const [touchEnd, setTouchEnd] = useState(null);

  const { productName, description, category, productImages, availableColors } =
    data?.data[0] || {};
  const categoryLink = category ? category.split(" ").join("-") : "";

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
    <section className="flex w-full flex-col gap-2 py-8 sm:gap-12">
      <div className="[&>a]:text-primary flex items-start gap-1.5 px-5 text-xs capitalize sm:px-13 sm:text-base xl:px-32">
        <Link to={"/"}>Home</Link>
        <span className="text-gray60">/</span>
        <Link to={`/${categoryLink}`}>{category}</Link>
        <span className="text-gray60">/</span>
        <span>{productName}</span>
      </div>

      {loader ? (
        <div className="w-full">
          <LoadingSpinner />
        </div>
      ) : (
        <section className="flex w-full flex-col items-start justify-start gap-3 sm:gap-8">
          <section className="flex w-full flex-col items-start justify-start gap-6 md:flex-row md:px-13 xl:px-32">
            {/* image */}
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
                        className="h-[480px] w-[427px] select-none sm:h-[512px]"
                        draggable={false}
                      />
                    )}
                  </div>

                  <div className="flex items-center gap-1.5 self-center md:hidden">
                    {productImages &&
                      productImages.map((_, index) => (
                        <span
                          key={index}
                          className={`rounded-full transition-colors ${
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

            {/* title, colors, CTA */}
            <section className="flex w-full flex-col items-start gap-6 px-5 sm:px-13 lg:w-fit lg:px-0">
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

                <button className="bg-primary-600 w-full cursor-pointer py-3 text-white capitalize">
                  Add to cart
                </button>
              </div>

              <div className="text-gray86 flex w-full items-center justify-between capitalize">
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
          </section>

          <section className="px-5 sm:px-13 xl:px-32">
            <div>
              <div>
                <span>fitting</span>
                <span></span>
              </div>
              <p></p>
            </div>
          </section>
        </section>
      )}
    </section>
  );
}

export default Product;
