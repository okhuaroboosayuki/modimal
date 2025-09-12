import Modal from "../../Modal";
import MobileMenu from "./MobileMenu";
import MobileMenuIcon from "./MobileMenuIcon";

function MobileMenuContainer() {
  return (
    <>
      <Modal.Open opens={"mobile-menu"}>
        <MobileMenuIcon />
      </Modal.Open>
      <Modal.Window name={"mobile-menu"}>
        <MobileMenu />
      </Modal.Window>
    </>
  );
}

export default MobileMenuContainer;
