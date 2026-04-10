import Cart from "../../../features/cart/Cart";
import Modal from "../../../features/modal/Modal";
import CartIcon from "./CartIcon";

function CartModalButton() {
  return (
    <>
      <Modal.Open opens={"cart"}>
        <CartIcon />
      </Modal.Open>
      <Modal.Window
        containerId={"header"}
        name={"cart"}
        styles={"cart-modal max-sm:top-0!"}
      >
        <Cart />
      </Modal.Window>
    </>
  );
}

export default CartModalButton;
