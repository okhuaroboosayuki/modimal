import { NavLink } from "react-router-dom";

function NavTitle({ title, onClick }) {
  if (!onClick) {
    return (
      <NavLink
        to={`/${title}`}
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
