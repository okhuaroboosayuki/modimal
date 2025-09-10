import { IoMdSearch } from "react-icons/io";
import { RiCloseFill } from "react-icons/ri";

function SearchIcon({ windowName, onClick, customStyle }) {
  const isWindowNameSearch = windowName === "search";

  return (
    <li className={`${customStyle} icon cursor-pointer`} onClick={onClick}>
      {isWindowNameSearch ? <RiCloseFill /> : <IoMdSearch />}
    </li>
  );
}

export default SearchIcon;
