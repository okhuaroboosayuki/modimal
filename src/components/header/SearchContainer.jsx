import Search from "./Search";
import SearchIcon from "./SearchIcon";
import Modal from "../Modal";

function SearchContainer({ customStyle }) {
  return (
    <>
      <Modal.Open opens="search">
        <SearchIcon customStyle={customStyle} />
      </Modal.Open>
      <Modal.Window name="search">
        <Search />
      </Modal.Window>
    </>
  );
}

export default SearchContainer;
