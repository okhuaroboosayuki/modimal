import { useNavigate } from "react-router-dom";
import { useUser } from "../auth/useUser";
import CheckoutFormActions from "../../components/cart/CheckoutFormActions";
import CheckBox from "../../components/CheckBox";
import { useCheckoutForm } from "../../hooks/useCheckoutForm";
import CartContactDetails from "./CartContactDetails";
import CartShippingDetails from "./CartShippingDetails";
import { useDispatch } from "react-redux";
import { useUpdateUserShippingDetails } from "./useUpdateUserShippingDetails";
import { setShippingDetails } from "./checkoutSlice";

function InfoPageDetails() {
  const navigate = useNavigate();
  const { isAuthenticated } = useUser();
  const { register, handleSubmit } = useCheckoutForm();
  const dispatch = useDispatch();
  const { updateShipping, isUpdating } = useUpdateUserShippingDetails();

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
    };

    dispatch(setShippingDetails(shippingDetails));

    if (saveShippingAddress && isAuthenticated) {
      updateShipping({ shippingDetails });
    }

    navigate("/cart/delivery");
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
          !isAuthenticated ? "log in to continue" : "continue to shipping"
        }
        linkText={"return to cart"}
        goBackUrl={"/cart"}
        onClick={
          !isAuthenticated
            ? () => {
                navigate("/login", { state: { from: "/cart/information" } });
              }
            : undefined
        }
        disabledStyle={isUpdating && "bg-primary-750 cursor-not-allowed"}
        isDisabled={isUpdating}
      />
    </form>
  );
}

export default InfoPageDetails;
