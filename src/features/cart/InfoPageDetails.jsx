import { useNavigate } from "react-router-dom";
import { useUser } from "../auth/useUser";
import CheckoutFormActions from "../../components/cart/CheckoutFormActions";
import CheckBox from "../../components/CheckBox";
import { useCheckoutForm } from "../../hooks/useCheckoutForm";
import CartContactDetails from "./CartContactDetails";
import CartShippingDetails from "./CartShippingDetails";

function InfoPageDetails() {
  const navigate = useNavigate();
  const { isAuthenticated } = useUser();
  const { register, handleSubmit } = useCheckoutForm();

  const onSubmit = ({
    email,
    saveEmail,
    country,
    firstName,
    lastName,
    company,
    address,
    apartment,
    postalCode,
    state,
    saveShippingAddress,
  }) => {
    if (!email || !country || !firstName || !lastName || !address || !state)
      return;
    console.log(email);
    console.log(saveEmail);
    console.log(country.toLowerCase());
    console.log(firstName);
    console.log(lastName);
    console.log(company);
    console.log(address);
    console.log(apartment);
    console.log(postalCode);
    console.log(state.toLowerCase());
    console.log(saveShippingAddress);
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
            {...register("saveEmail")}
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
            ? (e) => {
                e.preventDefault();
                navigate("/login", { state: { from: "/cart/information" } });
              }
            : undefined
        }
      />
    </form>
  );
}

export default InfoPageDetails;
