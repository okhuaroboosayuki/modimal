import { ProgressLink } from "../ProgressLinks";

function ItemImage({ item, variant, closeModal }) {
  const hasBadge = variant === "modal" || variant === "info";

  return (
    <ProgressLink
      to={`/product/${item.product_id}`}
      onClick={closeModal}
      className="relative"
    >
      <img
        src={item.products.productImages[0].url}
        alt={`${item.products.productName}'s image`}
        width={163}
        height={142}
        className="h-[160px] w-full object-cover sm:w-[142px]"
      />
      {hasBadge && (
        <span className="absolute top-1 right-1 w-10 bg-white p-2 text-center">
          {item.quantity}
        </span>
      )}
    </ProgressLink>
  );
}

export default ItemImage;
