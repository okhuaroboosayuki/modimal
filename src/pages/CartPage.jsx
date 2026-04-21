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

      <CartDetails />
    </>
  );
}

export default CartPage;
