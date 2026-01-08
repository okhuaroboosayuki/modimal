import { useState } from "react";
import { Link } from "react-router-dom";
import ColorWidget from "../ColorWidget";
import { RiHeartLine, RiTruckLine } from "react-icons/ri";
import { LoadingSpinner } from "../Loaders";

function Product({ data, loader }) {
  const [selectedImage, setSelectedImage] = useState(null);

  const { productName, description, category, productImages, availableColors } =
    data?.data[0] || {};
  const categoryLink = category ? category.split(" ").join("-") : "";

  // Get the image to display (selected or first available)
  const displayedImage =
    selectedImage ||
    (productImages && productImages.length > 0 ? productImages[0] : null);

  const handleImageSelect = (image) => {
    setSelectedImage(image);
  };

  return (
    <section className="flex w-full flex-col gap-12 px-32 py-8">
      <div className="[&>a]:text-primary flex items-start gap-1.5 capitalize">
        <Link to={"/"}>Home</Link> <span className="text-gray60">/</span>
        <Link to={`/${categoryLink}`}>{category}</Link>{" "}
        <span className="text-gray60">/</span>
        <span>{productName}</span>
      </div>

      {loader ? (
        <div className="w-full">
          <LoadingSpinner />
        </div>
      ) : (
        <section className="flex items-start justify-start gap-6">
          {/* image */}
          <section className="flex">
            {/* image */}
            <div className="flex h-[512px] gap-4">
              <div className="flex h-full w-fit flex-col gap-4 overflow-y-scroll">
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

              <div>
                {displayedImage && (
                  <img
                    src={displayedImage.url}
                    alt={`${productName}'s ${displayedImage.type} image`}
                    className="h-full w-[412px]"
                  />
                )}
              </div>
            </div>
          </section>

          <section className="flex flex-col items-start gap-6">
            {/* title */}
            <div className="flex flex-col gap-8">
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
              <div className="flex flex-col">
                <span className="text-gray86 self-end">Size guide</span>

                <select
                  name="size"
                  id="select-size"
                  className="border-grayDF w-full cursor-pointer border p-2 text-base font-medium outline-none focus:border-black"
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
      )}
    </section>
  );
}

export default Product;
