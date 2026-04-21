import CartQuantityControl from "../../features/cart/CartQuantityControl";
import { ProgressLink } from "../ProgressLinks";

function ItemDetails({ item, isWidthMedium, isModal }) {
  return (
    <div
      className={`mt-1 flex flex-col items-start ${isModal && "h-full w-full"} gap-2 pl-2`}
    >
      <ProgressLink
        to={`/product/${item.product_id}`}
        className="line-clamp-1 font-bold"
      >
        {item.products.productName}
      </ProgressLink>

      <div className="flex h-full flex-col justify-start gap-2 capitalize">
        <span className="text-gray40">size: {item.selected_size}</span>

        <span className="text-gray40">color: {item.selected_color}</span>

        {isModal || isWidthMedium ? (
          <CartQuantityControl
            item={item}
            isModal={isModal}
            isWidthMedium={isWidthMedium}
          />
        ) : null}
      </div>
    </div>
  );
}

export default ItemDetails;
