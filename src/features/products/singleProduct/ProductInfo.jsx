import { RiHeartFill, RiHeartLine, RiTruckLine } from "react-icons/ri";
import Button from "../../../components/Button";
import { useToggleFavorite } from "../../../hooks/useToggleFavorite";
import { useForm } from "react-hook-form";
import SizeField from "./SizeField";
import ColorField from "./Colorfield";

function ProductInfo({
  id,
  productName,
  description,
  availableColors,
  availableSizes,
  isOutOfStock,
}) {
  const { handleAddFavorite, handleRemoveFavorite, isProductInFavorites } =
    useToggleFavorite(id);
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm();

  const handleClick = () => {
    if (!isProductInFavorites) {
      handleAddFavorite();
    } else {
      handleRemoveFavorite();
    }
  };

  const submit = ({ size, color }) => {
    console.log(size, color);
  };

  return (
    <form
      className="flex w-full flex-col items-start justify-start gap-6 px-5 sm:px-13 md:px-0 lg:w-fit"
      onSubmit={handleSubmit(submit)}
    >
      {/* title */}
      <section className="flex flex-col gap-4 sm:gap-8">
        <h1 className="text-neutral-black text-[32px] font-medium">
          {productName}
        </h1>

        <p className="text-base">{description}</p>
      </section>

      {/* color */}
      <ColorField
        colors={availableColors}
        control={control}
        error={errors.color}
        isOutOfStock={isOutOfStock}
      />

      {/* size select & CTA button */}
      <section className="flex w-full flex-col gap-4">
        <SizeField
          control={control}
          error={errors.size}
          options={availableSizes}
          isOutOfStock={isOutOfStock}
        />

        <Button
          className={`${isOutOfStock ? "bg-gray86 cursor-not-allowed!" : "bg-primary-600"} w-full py-3 text-base text-white capitalize`}
          isDisabled={isOutOfStock}
        >
          {isOutOfStock ? "out of stock" : "add to cart"}
        </Button>
      </section>

      <section className="text-gray86 flex w-full flex-col-reverse items-center justify-between gap-1.5 capitalize sm:flex-row">
        <div className="flex items-center gap-1">
          <span className="icon">
            <RiTruckLine />
          </span>
          <span>easy return</span>
        </div>

        <div
          className="flex cursor-pointer items-center gap-1"
          onClick={handleClick}
        >
          <span className="icon">
            {isProductInFavorites ? (
              <RiHeartFill fill="red" />
            ) : (
              <RiHeartLine />
            )}
          </span>
          <span>
            {isProductInFavorites ? "remove from " : "add to "} wishlist
          </span>
        </div>
      </section>
    </form>
  );
}

export default ProductInfo;
