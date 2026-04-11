import { HiOutlineMinus, HiOutlinePlus } from "react-icons/hi";
import { RiCloseFill } from "react-icons/ri";
import { ProgressLink } from "../../components/ProgressLinks";
import { formatCurrency } from "../../utils/numberFormatter";
import useCartFunctions from "../../hooks/useCartFunctions";

function CartItem({ item, closeModal }) {
  const { handleRemoveFromCart, handleUpdateItemQuantity } = useCartFunctions();

  const removeItemFromCart = () => {
    handleRemoveFromCart({
      product_id: item.product_id,
      selected_size: item.selected_size,
      selected_color: item.selected_color,
    });
  };

  const handleIncreaseItem = () => {
    if (item.quantity >= item.products.stockQuantity) return;

    handleUpdateItemQuantity({
      product_id: item.product_id,
      quantity: item.quantity + 1,
      selected_size: item.selected_size,
      selected_color: item.selected_color,
    });
  };

  const handleDecrease = () => {
    if (item.quantity > 1) {
      handleUpdateItemQuantity({
        product_id: item.product_id,
        quantity: item.quantity - 1,
        selected_size: item.selected_size,
        selected_color: item.selected_color,
      });
      return;
    }

    removeItemFromCart();
  };

  return (
    <section className="flex h-[160px] w-full items-start">
      <ProgressLink
        to={`product/${item.product_id}`}
        onClick={closeModal}
        className={"relative"}
      >
        <img
          src={item.products.productImages[0].url}
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
          {item.products.productName}
        </ProgressLink>

        <div className="flex h-full flex-col justify-between gap-2">
          <span className="text-gray40">size: {item.selected_size}</span>

          <span className="text-gray40">color: {item.selected_color}</span>

          <div className="bg-primary-50 flex w-full max-w-[100px] items-center justify-between gap-2.5 border px-1.5 py-2">
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
        <span className="icon self-end" onClick={removeItemFromCart}>
          <RiCloseFill className="cursor-pointer" />
        </span>

        <span className="self-start font-semibold">
          {formatCurrency(item.products.price * item.quantity, 0)}
        </span>
      </div>
    </section>
  );
}

export default CartItem;
