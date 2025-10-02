import { useCallback, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { FiSearch } from "react-icons/fi";
import { RiCloseFill } from "react-icons/ri";
import Input from "../../components/Input";

function Search({ closeModal, ref }) {
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();

  const isSearchQueryEmpty = searchQuery.length == 0;

  const handleSearch = useCallback(() => {
    if (searchQuery.length > 0) {
      navigate(`/search?q=${searchQuery.toLocaleLowerCase()}`);
      closeModal();
    }
  }, [searchQuery, navigate, closeModal]);

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
      className="flex h-[152px] w-full items-center justify-center bg-white px-8 pt-8 pb-16 sm:px-16 md:px-36"
      ref={ref}
    >
      <div className="border-b-grayAD flex w-full items-center justify-center gap-2.5 border-b px-2 pt-4 pb-0.5 sm:px-4">
        <FiSearch
          stroke="#adadad"
          className={
            !isSearchQueryEmpty
              ? "h-[1.0938rem] w-[1.0938rem]"
              : "h-[1.5rem] w-[1.5rem]"
          }
        />
        <Input
          type={"search"}
          name={"search"}
          placeholder={"search"}
          customStyle={
            "md:placeholder:text-[20px] placeholder:capitalize text-grayAD font-medium w-full"
          }
          onChange={(e) => setSearchQuery(e.target.value)}
          value={searchQuery}
        />
        {!isSearchQueryEmpty && (
          <RiCloseFill
            stroke="#adadad"
            onClick={clearSearchInput}
            className="h-[1.0938rem] w-[1.0938rem] cursor-pointer"
          />
        )}
      </div>
    </div>
  );
}

export default Search;
