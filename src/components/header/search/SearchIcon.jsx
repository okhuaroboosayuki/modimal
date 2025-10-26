import { IoMdSearch } from "react-icons/io";
import { RiCloseFill } from "react-icons/ri";
import { useSelector } from "react-redux";

function SearchIcon({ windowName, onClick, customStyle }) {
  const { searchQueryState } = useSelector((store) => store.searchReducer);

  const isWindowNameSearch =
    windowName === "search" || windowName === "mobile-search";

  const handleSearchClick = () => {
    if (!searchQueryState) {
      onClick();
    }
  };

  const searchStateCheck = searchQueryState
    ? searchQueryState
    : isWindowNameSearch;

  return (
    <li
      className={`${customStyle} icon cursor-pointer`}
      onClick={handleSearchClick}
    >
      {searchStateCheck ? <RiCloseFill /> : <IoMdSearch />}
    </li>
  );
}

export default SearchIcon;
