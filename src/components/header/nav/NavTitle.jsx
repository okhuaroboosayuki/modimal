import { ProgressNavLink } from "../../ProgressLinks";

function NavTitle({ title, onClick }) {
  if (!onClick) {
    return (
      <ProgressNavLink
        to={`/${title}`}
        className="transition-500-in-out hover:text-neutral-black capitalize"
      >
        {title}
      </ProgressNavLink>
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
