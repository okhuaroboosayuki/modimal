import { useNavigate } from "react-router-dom";
import CheckoutFormActions from "../../components/cart/CheckoutFormActions";
import CheckBox from "../../components/CheckBox";
import { useCheckoutForm } from "../../hooks/useCheckoutForm";
import CartContactDetails from "./CartContactDetails";
import CartShippingDetails from "./CartShippingDetails";
import { useDispatch } from "react-redux";
import { setShippingDetails } from "./checkoutSlice";
import { useDerivedCart } from "./../../hooks/useDerivedCart";

function InfoPageDetails() {
  const navigate = useNavigate();
  const { register, handleSubmit } = useCheckoutForm();
  const dispatch = useDispatch();
  const { totalCartCount } = useDerivedCart();

  const onSubmit = ({
    email,
    subscribeToNewsletter,
    country,
    firstName,
    lastName,
    company,
    address,
    apartment,
    postalCode,
    state,
    phone,
    saveShippingAddress,
  }) => {
    if (!email || !country || !firstName || !lastName || !address || !state)
      return;

    const shippingDetails = {
      email: email.toLowerCase(),
      subscribeToNewsletter,
      country: country.toLowerCase(),
      fullName: `${firstName.toLowerCase()} ${lastName.toLowerCase()}`,
      company: company.toLowerCase(),
      address: address.toLowerCase(),
      apartment: apartment.toLowerCase(),
      postalCode,
      state: state.toLowerCase(),
      phone,
      saveShippingAddress,
    };

    dispatch(setShippingDetails(shippingDetails));
    navigate("/cart/shipping");
  };

  return (
    <form
      className="flex w-full flex-col items-start gap-12"
      onSubmit={handleSubmit(onSubmit)}
      onKeyDown={(e) => {
        if (e.key === "Enter") e.preventDefault();
      }}
    >
      <div className="flex w-full flex-col items-start gap-6">
        <div className="flex w-full flex-col items-start gap-2">
          <CartContactDetails />

          <CheckBox
            label={"email me with news and offers"}
            {...register("subscribeToNewsletter")}
          />
        </div>

        <div className="flex w-full flex-col items-start gap-2">
          <CartShippingDetails />

          <CheckBox
            label={"save this information for next time"}
            {...register("saveShippingAddress")}
          />
        </div>
      </div>

      <CheckoutFormActions
        btnText={"continue to shipping"}
        linkText={"return to cart"}
        goBackUrl={"/cart"}
        disabledStyle={
          totalCartCount === 0
            ? "bg-gray86! cursor-not-allowed! text-white!"
            : ""
        }
        isDisabled={totalCartCount === 0}
      />
    </form>
  );
}

export default InfoPageDetails;
