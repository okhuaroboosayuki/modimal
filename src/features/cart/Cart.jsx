import { RiCloseFill } from "react-icons/ri";
import { useGuestCart } from "./../../utils/guestCart";
import EmptyCart from "../../components/header/cart/EmptyCart";
import CartItem from "./CartItem";
import { useUser } from "../auth/useUser";
import { useCart } from "./useCart";
import { ProgressLink } from "../../components/ProgressLinks";

function Cart({ ref, closemodal }) {
  const guestCart = useGuestCart();
  const { isAuthenticated } = useUser();
  const { cart, totalCartCount } = useCart();

  const isCartEmpty = isAuthenticated
    ? totalCartCount === 0
    : guestCart.length === 0;
  const derivedCart = isAuthenticated ? cart?.data : guestCart;

  return (
    <section
      className={`absolute ${isCartEmpty ? "w-full sm:w-[392px]" : "h-fit w-full md:w-[628px] md:pb-30"} right-0 max-sm:h-screen md:right-10 lg:right-25`}
      ref={ref}
    >
      <div
        className={`${!isCartEmpty ? "pt-10" : "pt-6"} relative flex w-full flex-col gap-10 overflow-auto bg-white px-6 pb-10 capitalize max-sm:h-full sm:pt-8 sm:pb-20`}
      >
        <span
          className={`${!isCartEmpty && "hidden"} icon self-end`}
          onClick={closemodal}
        >
          <RiCloseFill className="cursor-pointer" />
        </span>

        {isCartEmpty ? (
          <EmptyCart closeModal={closemodal} />
        ) : (
          <>
            <div className="flex">
              <span
                className={`${isCartEmpty ? "hidden" : "md:hidden"} icon`}
                onClick={closemodal}
              >
                <RiCloseFill className="cursor-pointer" />
              </span>

              <h5 className="w-full text-center font-bold">your cart</h5>
            </div>

            <section className="hide-scrollbar flex h-fit flex-col gap-8 overflow-y-auto">
              {derivedCart?.map((item) => (
                <CartItem
                  key={`${item.product_id}-${item.selected_size}-${item.selected_color}`}
                  item={item}
                  closeModal={closemodal}
                  variant={"modal"}
                />
              ))}
            </section>
          </>
        )}

        {!isCartEmpty && (
          <ProgressLink
            to={"/cart"}
            className={
              "bg-primary-600 transition-500-in-out hover:text-primary-600 hover:border-primary-600 p-4 text-center text-sm text-white capitalize hover:border hover:bg-white"
            }
            onClick={closemodal}
          >
            check out
          </ProgressLink>
        )}
      </div>
    </section>
  );
}

export default Cart;
