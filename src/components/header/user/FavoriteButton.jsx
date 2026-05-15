import { RiHeartFill } from "react-icons/ri";
import { useLocation, useNavigate } from "react-router-dom";
import HeartIcon from "../../icons/HeartIcon";
import { useUser } from "../../../features/auth/useUser";

function FavoriteButton() {
  const navigate = useNavigate();
  const location = useLocation();
  const { isAuthenticated } = useUser();

  return (
    <li className="icon">
      {location.pathname !== "/favorites" ? (
        <HeartIcon
          className="cursor-pointer"
          onClick={isAuthenticated ? () => navigate("/favorites") : undefined}
        />
      ) : (
        <RiHeartFill fill="red" />
      )}
    </li>
  );
}

export default FavoriteButton;
