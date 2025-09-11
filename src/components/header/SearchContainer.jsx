import Search from "./Search";
import SearchIcon from "./SearchIcon";
import Modal from "../Modal";

function SearchContainer({ customStyle, window }) {
  return (
    <>
      <Modal.Open opens={window}>
        <SearchIcon customStyle={customStyle} />
      </Modal.Open>
      <Modal.Window name={window}>
        <Search />
      </Modal.Window>
    </>
  );
}

export default SearchContainer;
