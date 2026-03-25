import { RiHeartFill } from "react-icons/ri";
import { useLocation, useNavigate } from "react-router-dom";
import HeartIcon from "../../icons/HeartIcon";

function FavoriteButton() {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <li className="icon">
      {location.pathname !== "/favorites" ? (
        <HeartIcon
          className="cursor-pointer"
          onClick={() => navigate("/favorites")}
        />
      ) : (
        <RiHeartFill fill="red" />
      )}
    </li>
  );
}

export default FavoriteButton;
