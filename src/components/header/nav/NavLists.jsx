import SubNavLists from "./SubNavLists";
import NavTitle from "./NavTitle";
import Modal from "../../../features/modal/Modal";

function NavLists() {
  return (
    <ul className="text-gray40 hidden items-center justify-center gap-3 text-sm lg:flex lg:gap-6 lg:text-lg">
      <Modal.Open opens="collection">
        <NavTitle title={"collection"} />
      </Modal.Open>
      <Modal.Window
        name="collection"
        containerId={"header"}
        styles={"header-modal"}
      >
        <SubNavLists menuName={"collection"} />
      </Modal.Window>

      <Modal.Open opens="new-in">
        <NavTitle title={"new in"} />
      </Modal.Open>
      <Modal.Window
        name="new-in"
        containerId={"header"}
        styles={"header-modal"}
      >
        <SubNavLists menuName={"new-in"} />
      </Modal.Window>

      <NavTitle title={"modiweek"} />

      <Modal.Open opens="plus-size">
        <NavTitle title={"plus size"} />
      </Modal.Open>
      <Modal.Window
        name="plus-size"
        containerId={"header"}
        styles={"header-modal"}
      >
        <SubNavLists menuName={"plus-size"} />
      </Modal.Window>

      <Modal.Open opens="sustainability">
        <NavTitle title={"sustainability"} />
      </Modal.Open>
      <Modal.Window
        name="sustainability"
        containerId={"header"}
        styles={"header-modal"}
      >
        <SubNavLists menuName={"sustainability"} />
      </Modal.Window>
    </ul>
  );
}

export default NavLists;
