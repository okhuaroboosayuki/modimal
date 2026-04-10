import { RiCloseFill } from "react-icons/ri";
import { useGuestCart } from "./../../utils/guestCart";
import EmptyCart from "../../components/header/cart/EmptyCart";
import CartItem from "./CartItem";
import Button from "../../components/Button";

function Cart({ ref, closeModal }) {
  const guestCart = useGuestCart();
  const isCartEmpty = guestCart.length === 0;

  return (
    <section
      className={`absolute ${isCartEmpty ? "sm:w-[392]" : "h-fit w-full md:w-[628px] md:pb-30"} right-0 max-sm:h-screen md:right-10 lg:right-25`}
      ref={ref}
    >
      <div
        className={`${!isCartEmpty ? "pt-10" : "pt-6"} relative flex w-full flex-col gap-10 overflow-auto bg-white px-6 pb-10 capitalize max-sm:h-full sm:pt-8 sm:pb-20`}
      >
        <span
          className={`${!isCartEmpty && "hidden"} icon self-end`}
          onClick={closeModal}
        >
          <RiCloseFill className="cursor-pointer" />
        </span>

        {isCartEmpty ? (
          <EmptyCart closeModal={closeModal} />
        ) : (
          <>
            <div className="flex">
              <span
                className={`${isCartEmpty ? "hidden" : "md:hidden"} icon`}
                onClick={closeModal}
              >
                <RiCloseFill className="cursor-pointer" />
              </span>

              <h5 className="w-full text-center font-bold">your cart</h5>
            </div>

            <section className="hide-scrollbar flex h-fit flex-col gap-8 overflow-y-auto">
              {guestCart?.map((item) => (
                <CartItem
                  key={`${item.product_id}-${item.selected_size}-${item.selected_color}`}
                  item={item}
                  closeModal={closeModal}
                />
              ))}
            </section>
          </>
        )}

        {!isCartEmpty && (
          <Button className={"bg-primary-600 text-white"}>check out</Button>
        )}
      </div>
    </section>
  );
}

export default Cart;
