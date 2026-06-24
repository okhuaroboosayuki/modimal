import { useNavigate } from "react-router-dom";
import CheckoutFormActions from "../../components/cart/CheckoutFormActions";
import CheckBox from "../../components/CheckBox";
import { useCheckoutForm } from "../../hooks/useCheckoutForm";
import CartContactDetails from "./CartContactDetails";
import CartShippingDetails from "./CartShippingDetails";
import { useDispatch } from "react-redux";
import { setShippingDetails } from "./checkoutSlice";
import { useDerivedCart } from "./../../hooks/useDerivedCart";
import { useUser } from "../auth/useUser";

function InfoPageDetails() {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
  } = useCheckoutForm();
  const dispatch = useDispatch();
  const { totalCartCount } = useDerivedCart();
  const { isAuthenticated } = useUser();

  const onSubmit = async ({
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
      email: email.trim().toLowerCase(),
      subscribeToNewsletter,
      country: country.toLowerCase(),
      fullName: `${firstName.trim().toLowerCase()} ${lastName.trim().toLowerCase()}`,
      company: company.trim().toLowerCase(),
      address: apartment?.trim()
        ? `${apartment.trim().toLowerCase()}, ${address.trim().toLowerCase()}`
        : address.toLowerCase(),
      postalCode,
      state: state.toLowerCase(),
      phone,
      saveShippingAddress,
    };

    await new Promise((resolve) => setTimeout(resolve, 500));

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
        btnText={
          isSubmitting
            ? "loading..."
            : isAuthenticated
              ? "continue to shipping"
              : "login to continue"
        }
        linkText={"return to cart"}
        goBackUrl={"/cart"}
        onClick={
          !isAuthenticated
            ? (e) => {
                e.preventDefault();
                navigate("/login", { state: { from: "/cart/information" } });
              }
            : null
        }
        disabledStyle={
          isSubmitting
            ? "bg-primary-750! w-[177px] cursor-not-allowed! hover:text-white!"
            : totalCartCount === 0 && isAuthenticated
              ? "bg-gray86! cursor-not-allowed! text-white!"
              : ""
        }
        isDisabled={isSubmitting || totalCartCount === 0}
      />
    </form>
  );
}

export default InfoPageDetails;
