import { useCallback, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setSearchQueryState } from "./searchSlice";
import SearchInput from "../../components/header/search/SearchInput";

function Search({ closeModal, ref, height = "152px" }) {
  const { searchQueryState } = useSelector((store) => store.searchReducer);
  const [searchQuery, setSearchQuery] = useState(searchQueryState || "");
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleSearch = useCallback(() => {
    if (searchQuery.length > 0) {
      navigate(`/search?q=${searchQuery.toLocaleLowerCase()}`);
      dispatch(setSearchQueryState(searchQuery));
      closeModal();
    }
  }, [searchQuery, dispatch, closeModal, navigate]);

  const clearSearchInput = () => {
    setSearchQuery("");
  };

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Enter") {
        handleSearch();
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [handleSearch]);

  return (
    <div
      className={`flex h-[${height}] w-full items-center justify-center bg-white px-8 pt-8 pb-16 sm:px-16 md:px-36`}
      ref={ref}
    >
      <SearchInput
        searchQuery={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        onClearInput={clearSearchInput}
      />
    </div>
  );
}

export default Search;
