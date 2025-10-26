import { FiSearch } from "react-icons/fi";
import { RiCloseFill } from "react-icons/ri";
import Input from "../../Input";

function SearchInput({ searchQuery, onChange, onClearInput }) {
  const isSearchQueryEmpty = searchQuery?.length == 0;

  return (
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
        onChange={onChange}
        value={searchQuery}
      />
      {!isSearchQueryEmpty && (
        <RiCloseFill
          stroke="#adadad"
          onClick={onClearInput}
          className="h-[1.0938rem] w-[1.0938rem] cursor-pointer"
        />
      )}
    </div>
  );
}

export default SearchInput;
