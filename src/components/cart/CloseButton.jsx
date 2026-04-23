import { RiCloseFill } from "react-icons/ri";
import useCartFunctions from "../../hooks/useCartFunctions";

function CloseButton({ item, variant, isWidthMedium }) {
  const { handleRemoveFromCart } = useCartFunctions();

  const removeItemFromCart = () => {
    handleRemoveFromCart({
      product_id: item.product_id,
      selected_size: item.selected_size,
      selected_color: item.selected_color,
    });
  };
  return (
    <span
      className={`${variant === "modal" || variant === "info" || isWidthMedium ? "absolute top-0 right-0" : "relative"} icon flex cursor-pointer items-center justify-center`}
      onClick={removeItemFromCart}
    >
      <RiCloseFill />
    </span>
  );
}

export default CloseButton;
