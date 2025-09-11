function NavTitle({ title, onClick }) {
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
