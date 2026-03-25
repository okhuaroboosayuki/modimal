import { RiHeartFill } from "react-icons/ri";
import { useUser } from "../../features/auth/useUser";
import { useAddFavoriteProduct } from "../../features/favorites/useAddFavoriteProduct";
import { useRemoveFavoriteProduct } from "../../features/favorites/useRemoveFavoriteProduct";
import HeartIcon from "../icons/HeartIcon";

function ProductCardFavoriteButton({ productId, isProductInFavorites }) {
  const { isAuthenticated, data } = useUser();
  const { addToFavorites } = useAddFavoriteProduct();
  const { removeFromFavorites } = useRemoveFavoriteProduct();

  const userId = data?.id;

  const handleFavoriteClick = () => {
    if (!isAuthenticated) return;
    addToFavorites({ userId, productId });
  };

  const handleRemoveFavorite = () => {
    if (!isAuthenticated) return;
    removeFromFavorites({ userId, productId });
  };

  return (
    <span className="icon absolute top-2.5 right-2 md:top-6 md:right-4">
      {!isProductInFavorites ? (
        <HeartIcon className={"cursor-pointer"} onClick={handleFavoriteClick} />
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
