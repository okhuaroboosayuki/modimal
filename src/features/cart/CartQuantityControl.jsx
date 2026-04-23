import { HiOutlineMinus, HiOutlinePlus } from "react-icons/hi";
import useCartFunctions from "../../hooks/useCartFunctions";

function CartQuantityControl({ item, variant, isWidthMedium }) {
  const { handleUpdateItemQuantity } = useCartFunctions();

  const handleIncreaseItemQuantity = () => {
    if (item.quantity >= item.products.stockQuantity) return;

    handleUpdateItemQuantity({
      product_id: item.product_id,
      quantity: item.quantity + 1,
      selected_size: item.selected_size,
      selected_color: item.selected_color,
    });
  };

  const handleDecreaseItemQuantity = () => {
    if (item.quantity > 1) {
      handleUpdateItemQuantity({
        product_id: item.product_id,
        quantity: item.quantity - 1,
        selected_size: item.selected_size,
        selected_color: item.selected_color,
      });
      return;
    }
  };

  return (
    <div
      className={`${variant === "info" || variant === "modal" || isWidthMedium ? "absolute right-0 bottom-0" : "relative"} bg-primary-50 text-primary-700 flex w-full max-w-[90px] items-center justify-between gap-1.5 border px-1.5 py-1 sm:max-w-[100px] sm:gap-2.5`}
    >
      <span
        className="icon"
        onClick={handleDecreaseItemQuantity}
        tabIndex={0}
        aria-label="decrease quantity"
      >
        <HiOutlineMinus className="cursor-pointer" fill="#040504" />
      </span>

      <span>{item.quantity}</span>

      <span
        className="icon"
        onClick={handleIncreaseItemQuantity}
        tabIndex={0}
        aria-label="increase quantity"
      >
        <HiOutlinePlus className="cursor-pointer" fill="#404e3e" />
      </span>
    </div>
  );
}

export default CartQuantityControl;
