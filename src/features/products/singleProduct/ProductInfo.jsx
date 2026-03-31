import { RiHeartFill, RiHeartLine, RiTruckLine } from "react-icons/ri";
import ColorWidget from "../../../components/ColorWidget";
import Button from "../../../components/Button";
import { useToggleFavorite } from "../../../hooks/useToggleFavorite";
import CustomSelect from "./CustomSelect";
import { Controller, useForm } from "react-hook-form";

function ProductInfo({
  id,
  productName,
  description,
  availableColors,
  availableSizes,
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

  const submit = ({ size }) => {
    console.log(size);
  };

  return (
    <form
      className="flex w-full flex-col items-start justify-start gap-6 px-5 sm:px-13 md:px-0 lg:w-fit"
      onSubmit={handleSubmit(submit)}
    >
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

          <Controller
            name="size"
            control={control}
            rules={{ required: "This field is required" }}
            render={({ field }) => (
              <CustomSelect
                options={availableSizes}
                value={field.value ?? ""}
                onChange={field.onChange}
                error={errors.size}
              />
            )}
          />
        </div>

        <Button
          styles={
            "bg-primary-600 w-full cursor-pointer py-3 text-base! text-white capitalize"
          }
        >
          add to cart
        </Button>
      </div>

      <div className="text-gray86 flex w-full flex-col-reverse items-center justify-between gap-1.5 capitalize sm:flex-row">
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
      </div>
    </form>
  );
}

export default ProductInfo;
