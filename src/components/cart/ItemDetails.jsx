import CartQuantityControl from "../../features/cart/CartQuantityControl";
import { formatCurrency } from "../../utils/numberFormatter";
import { ProgressLink } from "../ProgressLinks";

function ItemDetails({ item, isWidthMedium, variant, closeModal }) {
  return (
    <div
      className={`flex flex-col items-start ${variant === "info" || variant === "modal" ? "h-full w-full" : ""} gap-2 pl-2`}
    >
      <ProgressLink
        to={`/product/${item.product_id}`}
        onClick={closeModal}
        className="line-clamp-1 font-bold"
      >
        {item.products.productName}
      </ProgressLink>

      <div className="flex h-full flex-col justify-start gap-2 capitalize">
        <span className="text-gray40">size: {item.selected_size}</span>

        <span className="text-gray40">color: {item.selected_color}</span>

        {variant === "info" || variant === "modal" || isWidthMedium ? (
          <CartQuantityControl
            item={item}
            variant={variant}
            isWidthMedium={isWidthMedium}
          />
        ) : null}

        {variant === "info" || variant === "modal" || isWidthMedium ? (
          <span
            className={`absolute bottom-0 self-start font-semibold xl:left-26`}
          >
            {formatCurrency(item.products.price, 0)}
          </span>
        ) : null}
      </div>
    </div>
  );
}

export default ItemDetails;
