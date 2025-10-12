import Modal from "../../../features/modal/Modal";
import Search from "../../../features/products/Search";
import SearchIcon from "./SearchIcon";

function SearchContainer({ customStyle, window }) {
  return (
    <>
      <Modal.Open opens={window}>
        <SearchIcon customStyle={customStyle} />
      </Modal.Open>
      <Modal.Window
        name={window}
        containerId={"header"}
        styles={"header-modal"}
      >
        <Search />
      </Modal.Window>
    </>
  );
}

export default SearchContainer;
