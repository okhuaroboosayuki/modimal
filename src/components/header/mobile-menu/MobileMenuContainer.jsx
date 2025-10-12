import Modal from "../../../features/modal/Modal";
import MobileMenu from "./MobileMenu";
import MobileMenuIcon from "./MobileMenuIcon";

function MobileMenuContainer() {
  return (
    <>
      <Modal.Open opens={"mobile-menu"}>
        <MobileMenuIcon />
      </Modal.Open>
      <Modal.Window
        name={"mobile-menu"}
        containerId={"header"}
        styles={"header-modal"}
      >
        <MobileMenu />
      </Modal.Window>
    </>
  );
}

export default MobileMenuContainer;
