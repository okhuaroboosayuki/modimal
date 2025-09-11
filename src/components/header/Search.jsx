import { FiSearch } from "react-icons/fi";
import { RiCloseFill } from "react-icons/ri";
import Input from "../Input";

function Search({ onSearch, ref }) {
  console.log(onSearch);
  console.log(ref);

  return (
    <div
      className="flex h-[152px] w-full items-center justify-center bg-white px-8 pt-8 pb-16 sm:px-16 md:px-36"
      ref={ref}
    >
      <div className="border-b-grayAD icon search-icons flex w-full items-center justify-center gap-2.5 border-b px-2 py-4 sm:px-4">
        <FiSearch stroke="#adadad" />
        <Input
          type={"search"}
          name={"search"}
          placeholder={"search"}
          customStyle={
            "md:placeholder:text-[20px] placeholder:capitalize text-grayAD font-medium w-full"
          }
        />
        <RiCloseFill
          stroke="#adadad"
          className="cancel hidden cursor-pointer"
        />
      </div>
    </div>
  );
}

export default Search;
