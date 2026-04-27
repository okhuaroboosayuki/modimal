// import { useForm } from "react-hook-form";
import CartContactDetails from "../features/cart/CartContactDetails";
import CheckBox from "../components/CheckBox";
import Button from "../components/Button";
import { useCheckoutForm } from "../hooks/useCheckoutForm";
import CartShippingDetails from "../features/cart/CartShippingDetails";

function CartInfo() {
  const { register, handleSubmit } = useCheckoutForm();

  const onSubmit = ({ email, emailCheckBox, country }) => {
    if (!email) return;
    console.log(email);
    console.log(emailCheckBox);
    console.log(country);
  };

  return (
    <form
      className="flex w-full flex-col items-start gap-6"
      onSubmit={handleSubmit(onSubmit)}
      onKeyDown={(e) => {
        if (e.key === "Enter") e.preventDefault();
      }}
    >
      <div className="flex w-full flex-col items-start gap-2">
        <CartContactDetails />

        <CheckBox
          label={"email me with news and offers"}
          {...register("emailCheckBox")}
        />
      </div>

      <CartShippingDetails />

      <Button>continue to shipping</Button>
    </form>
  );
}

export default CartInfo;
