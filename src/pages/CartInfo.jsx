import SEO from "../components/SEO";
import InfoPageDetails from "../features/cart/InfoPageDetails";

function CartInfo() {
  return (
    <>
      <SEO
        title={"Checkout - Modimal"}
        description={
          "Provide your contact and shipping details to complete your purchase at Modimal. Fast and secure checkout process."
        }
        url={"/cart/information"}
      />

      <InfoPageDetails />
    </>
  );
}

export default CartInfo;
