import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useOutletContext } from "react-router-dom";
import EmptyDetails from "../../components/cart/EmptyDetails";
import { useDerivedCart } from "../../hooks/useDerivedCart";
import CheckoutFormActions from "../../components/cart/CheckoutFormActions";
import { useDeliveryDates } from "./../../hooks/useDeliveryDates";
import { useCheckoutForm } from "./../../hooks/useCheckoutForm";
import { CartDeliveryDetailsSkeleton } from "./../../components/Loaders";
import { formatDeliveryDates } from "../../utils/dateFormatters";
import GuaranteedDate from "../../components/cart/GuaranteedDate";
import { setTotalAmount } from "./checkoutSlice";
import { useUpdateUserShippingDetails } from "./useUpdateUserShippingDetails";
import ExpectedDates from "../../components/cart/ExpectedDates";

function CartDeliveryDetails() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { totalAmount } = useOutletContext();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { totalCartCount } = useDerivedCart();
  const { shippingDetails } = useSelector((store) => store.checkoutReducer);
  const { watch } = useCheckoutForm();
  const { updateShipping, isUpdating } = useUpdateUserShippingDetails();

  const country = watch("country");
  const { deliveryDates, isLoading } = useDeliveryDates(
    country,
    totalCartCount,
  );

  const formattedDates = formatDeliveryDates(deliveryDates);
  const tomorrow = formatDeliveryDates(deliveryDates, false);

  const canUpdateShippingDetails = () => {
    if (shippingDetails.saveShippingAddress)
      updateShipping({ shippingDetails });
  };

  const onSubmit = () => {
    setIsSubmitting(true);
    setTimeout(() => setIsSubmitting(false), 1000);

    dispatch(setTotalAmount(totalAmount));
    canUpdateShippingDetails();
    navigate("/cart/payment");
  };

  if (!shippingDetails)
    return (
      <EmptyDetails
        message={"You have not provided your shipping details"}
        buttonText={"complete form"}
        url={"/cart/information"}
      />
    );

  if (isLoading) {
    return <CartDeliveryDetailsSkeleton />;
  }

  return (
    <section className="flex h-full w-full flex-col items-start gap-6">
      <h1 className="text-lg font-medium md:text-[20px]">delivery options</h1>

      <div className="border-grayDF w-full border"></div>

      <div className="flex w-full flex-col gap-2 text-base">
        <div className="flex w-full justify-between gap-3 text-base font-semibold">
          <span className="text-gray86">express courier (air)</span>
          <span className="text-black">free</span>
        </div>

        <span className="text-gray60 text-sm font-medium">
          3 to 4 business days
        </span>
      </div>

      <ExpectedDates dates={deliveryDates} formattedDates={formattedDates} />

      <div className="border-grayDF w-full border"></div>

      <GuaranteedDate dates={deliveryDates} guaranteedDate={tomorrow} />

      <div className="mt-24 w-full">
        <CheckoutFormActions
          btnText={
            isSubmitting || isUpdating ? "loading" : "continue to payment"
          }
          linkText={"information"}
          goBackUrl={"/cart/information"}
          onClick={onSubmit}
          disabledStyle={
            isUpdating || isSubmitting
              ? "bg-primary-750! w-[177px] cursor-not-allowed! hover:text-white!"
              : "hover:bg-primary-600! hover:text-white!"
          }
          isDisabled={isUpdating || isSubmitting}
        />
      </div>
    </section>
  );
}

export default CartDeliveryDetails;
