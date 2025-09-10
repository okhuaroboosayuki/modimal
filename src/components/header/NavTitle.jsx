function NavTitle({ title, onClick, onMouseEnter }) {
  return (
    <li
      className="transition-500-in-out hover:text-neutral-black cursor-pointer capitalize"
      onClick={onClick}
      onMouseEnter={onMouseEnter}
    >
      {title}
    </li>
  );
}

export default NavTitle;
