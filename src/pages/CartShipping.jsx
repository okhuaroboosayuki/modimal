import SEO from "../components/SEO";
import CartDeliveryDetails from "../features/cart/CartDeliveryDetails";

function CartShipping() {
  return (
    <>
      <SEO
        title={"Checkout Shipping - Modimal"}
        description={
          "Choose your preferred shipping method and delivery options for your order at Modimal. Fast and reliable shipping services to get your items delivered on time."
        }
        url={"/cart/shipping"}
      />

      <CartDeliveryDetails />
    </>
  );
}

export default CartShipping;
