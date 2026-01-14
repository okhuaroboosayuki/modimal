import { IoMdSearch } from "react-icons/io";
import { RiCloseFill } from "react-icons/ri";
import { useDispatch, useSelector } from "react-redux";
import { clearSearchQuerySate } from "../../../features/search/searchSlice";
import { setCloseModal } from "../../../features/modal/modalSlice";

function SearchIcon({ windowName, onClick, customStyle }) {
  const { searchQueryState } = useSelector((store) => store.searchReducer);
  const dispatch = useDispatch();

  const isWindowNameSearch =
    windowName === "search" || windowName === "mobile-search";

  const handleSearchClick = (e) => {
    if (searchQueryState) {
      e.stopPropagation();
      dispatch(clearSearchQuerySate());
      dispatch(setCloseModal());
    } else {
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
