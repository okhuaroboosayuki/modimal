import { RiHeartFill } from "react-icons/ri";
import { useLocation } from "react-router-dom";
import HeartIcon from "../../icons/HeartIcon";

function FavoriteButton() {
  const location = useLocation();

  return (
    <li className="icon">
      {location.pathname !== "/favorites" ? (
        <HeartIcon className="cursor-pointer" />
      ) : (
        <RiHeartFill fill="red" />
      )}
    </li>
  );
}

export default FavoriteButton;
