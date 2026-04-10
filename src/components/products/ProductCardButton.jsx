import { HiOutlineMinus, HiOutlinePlus } from "react-icons/hi";
import Button from "../Button";
import {
  removeFromGuestCart,
  updateGuestCartQuantity,
  useGuestCart,
} from "../../utils/guestCart";

function ProductCardButton({
  product,
  isOutOfStock,
  isLastImage,
  isSingleImage,
  hovered,
  onNextClick,
}) {
  const { id, stockQuantity } = product;

  const guestCart = useGuestCart();
  const cartItem = guestCart.find((item) => item.product_id === id);
  const count = cartItem ? cartItem.quantity : 1;

  const isProductInCart = !!cartItem;

  const handleIncrease = () => {
    if (count >= stockQuantity) return;

    updateGuestCartQuantity({
      productId: id,
      selectedSize: cartItem.selected_size,
      selectedColor: cartItem.selected_color,
      quantity: count + 1,
    });
  };

  const handleDecrease = () => {
    if (count > 1) {
      updateGuestCartQuantity({
        productId: id,
        selectedSize: cartItem.selected_size,
        selectedColor: cartItem.selected_color,
        quantity: count - 1,
      });
      return;
    }

    removeFromGuestCart({
      productId: id,
      selectedSize: cartItem.selected_size,
      selectedColor: cartItem.selected_color,
    });
  };

  if (isOutOfStock) {
    return (
      <Button
        className="bg-gray86 w-full cursor-not-allowed! text-white max-sm:p-3!"
        isDisabled
      >
        out of stock
      </Button>
    );
  }

  if (isProductInCart) {
    return (
      <div className="flex w-full items-center justify-between gap-4">
        <Button
          className="bg-primary-600 w-[50px] text-white max-sm:p-3"
          clickHandler={handleDecrease}
        >
          <HiOutlineMinus />
        </Button>

        <span className="w-full border-b-2 border-b-white py-2 text-center text-lg text-white backdrop-blur-sm">
          {count}
        </span>

        <Button
          className="bg-primary-600 w-[50px] text-white max-sm:p-3"
          clickHandler={handleIncrease}
        >
          <HiOutlinePlus />
        </Button>
      </div>
    );
  }

  if (isLastImage && isSingleImage && !hovered) return null;
  return (
    <Button
      className="bg-primary-600 w-full text-white max-sm:p-3"
      clickHandler={onNextClick}
    >
      {isLastImage ? "add to cart" : "next image"}
    </Button>
  );
}

export default ProductCardButton;
