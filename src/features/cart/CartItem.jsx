import { HiOutlineMinus, HiOutlinePlus } from "react-icons/hi";
import { RiCloseFill } from "react-icons/ri";
import { ProgressLink } from "../../components/ProgressLinks";
import {
  removeFromGuestCart,
  updateGuestCartQuantity,
} from "../../utils/guestCart";
import { formatCurrency } from "../../utils/numberFormatter";

function CartItem({ item, closeModal }) {
  const handleRemoveItemFromCart = () => {
    removeFromGuestCart({
      productId: item.product_id,
      selectedSize: item.selected_size,
      selectedColor: item.selected_color,
    });
  };

  const handleIncreaseItem = () => {
    if (item.quantity >= item.product_details.stockQuantity) return;

    updateGuestCartQuantity({
      productId: item.product_id,
      selectedSize: item.selected_size,
      selectedColor: item.selected_color,
      quantity: item.quantity + 1,
    });
  };

  const handleDecrease = () => {
    if (item.quantity > 1) {
      updateGuestCartQuantity({
        productId: item.product_id,
        selectedSize: item.selected_size,
        selectedColor: item.selected_color,
        quantity: item.quantity - 1,
      });
      return;
    }

    removeFromGuestCart({
      productId: item.product_id,
      selectedSize: item.selected_size,
      selectedColor: item.selected_color,
    });
  };

  return (
    <section className="flex h-[160px] w-full items-start">
      <ProgressLink
        to={`product/${item.product_id}`}
        onClick={closeModal}
        className={"relative"}
      >
        <img
          src={item.product_details.productImages[0].url}
          alt=""
          width={163}
          height={142}
          className="h-[160px] w-[142px] object-cover"
        />
        <span className="absolute top-1 right-1 w-10 bg-white p-2 text-center">
          {item.quantity}
        </span>
      </ProgressLink>

      <div className="flex h-full w-full flex-col items-start gap-2 pl-2">
        <ProgressLink
          to={`product/${item.product_id}`}
          onClick={closeModal}
          className="font-bold"
        >
          {item.product_details.productName}
        </ProgressLink>

        <div className="flex h-full flex-col justify-between gap-2">
          <span className="text-gray40">size: {item.selected_size}</span>

          <span className="text-gray40">color: {item.selected_color}</span>

          <div className="bg-primary-50 flex gap-2.5 border px-1.5 py-2">
            <span className="icon" onClick={handleDecrease}>
              <HiOutlineMinus className="cursor-pointer" fill="#404e3e" />
            </span>

            <span>{item.quantity}</span>

            <span className="icon" onClick={handleIncreaseItem}>
              <HiOutlinePlus className="cursor-pointer" fill="#404e3e" />
            </span>
          </div>
        </div>
      </div>

      <div className="flex h-full w-[100px] flex-col items-center justify-between gap-20">
        <span className="icon self-end" onClick={handleRemoveItemFromCart}>
          <RiCloseFill className="cursor-pointer" />
        </span>

        <span className="self-start font-semibold">
          {formatCurrency(item.product_details.price * item.quantity, 0)}
        </span>
      </div>
    </section>
  );
}

export default CartItem;
