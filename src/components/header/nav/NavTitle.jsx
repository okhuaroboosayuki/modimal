import { NavLink } from "react-router-dom";
import { usePrefetchNavigation } from "../../../hooks/usePrefetchNavigation";

function NavTitle({ title, onClick }) {
  const { prefetchProducts } = usePrefetchNavigation();

  const handleMouseEnter = () => {
    prefetchProducts(title);
  };

  if (!onClick) {
    return (
      <NavLink
        to={`/${title}`}
        onMouseEnter={handleMouseEnter}
        className="transition-500-in-out hover:text-neutral-black capitalize"
      >
        {title}
      </NavLink>
    );
  }

  return (
    <li
      className="transition-500-in-out hover:text-neutral-black cursor-pointer capitalize"
      onClick={onClick}
    >
      {title}
    </li>
  );
}

export default NavTitle;
