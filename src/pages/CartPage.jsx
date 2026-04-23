import CartPageHeader from "../components/cart/CartPageHeader";
import SEO from "../components/SEO";
import CartDetails from "../features/cart/CartDetails";

function CartPage() {
  return (
    <>
      <SEO
        title={"Your Cart"}
        description="Review the items in your cart at Modimal. Manage your selected products, update quantities, and proceed to checkout for a seamless shopping experience."
        url={"cart"}
      />

      <div className="flex h-screen w-full flex-col items-center gap-8 px-4 pt-8 sm:px-8 lg:px-12 xl:px-24">
        <CartPageHeader />

        <CartDetails />
      </div>
    </>
  );
}

export default CartPage;
