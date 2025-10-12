import Modal from "../../Modal";
import MobileMenu from "./MobileMenu";
import MobileMenuIcon from "./MobileMenuIcon";

function MobileMenuContainer({ modalName }) {
  return (
    <>
      <Modal.Open opens={"mobile-menu"}>
        <MobileMenuIcon modalName={modalName} />
      </Modal.Open>
      <Modal.Window
        name={"mobile-menu"}
        containerId={"header"}
        styles={"filter-modal"}
      >
        <MobileMenu />
      </Modal.Window>
    </>
  );
}

export default MobileMenuContainer;
