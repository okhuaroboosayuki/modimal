import { RiHeartFill } from "react-icons/ri";
import HeartIcon from "../icons/HeartIcon";

function ProductCardFavoriteButton({
  handleAddFavorite,
  handleRemoveFavorite,
  isProductInFavorites,
}) {
  return (
    <span className="icon absolute top-2.5 right-2 md:top-6 md:right-4">
      {!isProductInFavorites ? (
        <HeartIcon className={"cursor-pointer"} onClick={handleAddFavorite} />
      ) : (
        <RiHeartFill
          fill="red"
          className="cursor-pointer"
          onClick={handleRemoveFavorite}
        />
      )}
    </span>
  );
}

export default ProductCardFavoriteButton;
