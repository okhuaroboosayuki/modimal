import { RiHeartFill, RiHeartLine, RiTruckLine } from "react-icons/ri";
import { useToggleFavorite } from "../../../hooks/useToggleFavorite";
import { useForm } from "react-hook-form";
import SizeField from "./SizeField";
import ColorField from "./Colorfield";
import { useGuestCart } from "../../../utils/guestCart";
import CTAButton from "./CTAButton";
import { useCart } from "../../cart/useCart";
import { useUser } from "../../auth/useUser";
import useCartFunctions from "../../../hooks/useCartFunctions";

function ProductInfo({
  id,
  productName,
  description,
  availableColors,
  availableSizes,
  isOutOfStock,
  product,
}) {
  const { handleAddFavorite, handleRemoveFavorite, isProductInFavorites } =
    useToggleFavorite(id);
  const {
    handleAddToCart,
    handleUpdateItemQuantity,
    handleRemoveFromCart,
    handleColorOrSizeUpdate,
  } = useCartFunctions();

  const { isAuthenticated } = useUser();
  const { cart } = useCart();
  const guestCart = useGuestCart();

  const cartItem = isAuthenticated
    ? cart?.data?.find((item) => item.product_id === id)
    : guestCart.find((item) => item.product_id === id);

  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({
    values: {
      color: cartItem?.selected_color ?? "",
      size: cartItem?.selected_size ?? "",
    },
  });

  const handleClickFavorite = () => {
    if (!isProductInFavorites) {
      handleAddFavorite();
    } else {
      handleRemoveFavorite();
    }
  };

  const handleQuantityIncrease = () => {
    if (cartItem.quantity >= product.stockQuantity) return;

    handleUpdateItemQuantity({
      product_id: id,
      quantity: cartItem.quantity + 1,
      selected_size: cartItem.selected_size,
      selected_color: cartItem.selected_color,
    });
  };

  const handleQuantityDecrease = () => {
    if (cartItem.quantity > 1) {
      handleUpdateItemQuantity({
        product_id: id,
        quantity: cartItem.quantity - 1,
        selected_size: cartItem.selected_size,
        selected_color: cartItem.selected_color,
      });
      return;
    }
    handleRemoveFromCart({
      product_id: id,
      selected_size: cartItem.selected_size,
      selected_color: cartItem.selected_color,
    });
  };

  const submit = ({ size, color }) => {
    handleAddToCart({
      product_id: id,
      quantity: 1,
      selected_size: size,
      selected_color: color,
      product,
    });
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
        onColorChange={(color) => {
          if (cartItem)
            handleColorOrSizeUpdate({
              product_id: id,
              selected_color: color,
              selected_size: null,
            });
        }}
      />

      {/* size select & CTA button */}
      <section className="flex w-full flex-col gap-4">
        <SizeField
          control={control}
          error={errors.size}
          options={availableSizes}
          isOutOfStock={isOutOfStock}
          onSizeChange={(size) => {
            if (cartItem)
              handleColorOrSizeUpdate({
                product_id: id,
                selected_size: size,
                selected_color: null,
              });
          }}
        />

        <CTAButton
          isInCart={!!cartItem}
          isOutOfStock={isOutOfStock}
          quantity={cartItem?.quantity}
          stockQuantity={product.stockQuantity}
          onIncrease={handleQuantityIncrease}
          onDecrease={handleQuantityDecrease}
        />
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
          onClick={handleClickFavorite}
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
