import { HiOutlineMinus, HiOutlinePlus } from "react-icons/hi";
import Button from "../Button";
import { useGuestCart } from "../../utils/guestCart";
import { useUser } from "../../features/auth/useUser";
import { useCart } from "../../features/cart/useCart";
import useCartFunctions from "../../hooks/useCartFunctions";

function ProductCardButton({
  product,
  isOutOfStock,
  isLastImage,
  isSingleImage,
  hovered,
  onNextClick,
}) {
  const { id, stockQuantity } = product;

  const { isAuthenticated } = useUser();
  const { cart } = useCart();
  const guestCart = useGuestCart();
  const { handleUpdateItemQuantity, handleRemoveFromCart } = useCartFunctions();

  const cartItem = isAuthenticated
    ? cart?.data?.find((item) => item.product_id === id)
    : guestCart.find((item) => item.product_id === id);

  const count = cartItem ? cartItem.quantity : 1;

  const isProductInCart = !!cartItem;

  const handleIncrease = () => {
    if (count >= stockQuantity) return;

    handleUpdateItemQuantity({
      product_id: id,
      quantity: count + 1,
      selected_size: cartItem.selected_size,
      selected_color: cartItem.selected_color,
    });
  };

  const handleDecrease = () => {
    if (count > 1) {
      handleUpdateItemQuantity({
        product_id: id,
        quantity: count - 1,
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
      <div className="flex w-full items-center justify-between gap-2 sm:gap-4">
        <Button
          className="bg-primary-600 w-[50px] border-transparent! text-white max-sm:p-3"
          clickHandler={handleDecrease}
        >
          <HiOutlineMinus />
        </Button>

        <span className="bg-warning-bg w-full p-1 text-center text-lg text-black sm:py-2">
          {count}
        </span>

        <Button
          className="bg-primary-600 w-[50px] border-transparent! text-white max-sm:p-3"
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
      className="bg-primary-600 w-full border-transparent! text-white max-sm:p-3"
      clickHandler={onNextClick}
    >
      {isLastImage ? "add to cart" : "next image"}
    </Button>
  );
}

export default ProductCardButton;
