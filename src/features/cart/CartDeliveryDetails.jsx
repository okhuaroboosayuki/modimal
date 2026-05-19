import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import EmptyDetails from "../../components/cart/EmptyDetails";
import { useDerivedCart } from "../../hooks/useDerivedCart";
import CheckoutFormActions from "../../components/cart/CheckoutFormActions";
import { useDeliveryDates } from "./../../hooks/useDeliveryDates";
import { useCheckoutForm } from "./../../hooks/useCheckoutForm";
import { SmallLoader } from "./../../components/Loaders";
import { formatDeliveryDates } from "../../utils/dateFormatters";
import GuaranteedDate from "../../components/cart/GuaranteedDate";
import { addEDD, clearEDD } from "./checkoutSlice";
import { useUpdateUserShippingDetails } from "./useUpdateUserShippingDetails";

function CartDeliveryDetails() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { totalCartCount } = useDerivedCart();
  const { shippingDetails, guaranteedDelivery } = useSelector(
    (store) => store.checkoutReducer,
  );
  const {
    watch,
    handleSubmit,
    formState: { isSubmitting },
  } = useCheckoutForm();
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

  const submitWithGuaranteedDate = () => {
    dispatch(clearEDD());
    dispatch(addEDD(guaranteedDelivery.date));
    canUpdateShippingDetails();
    navigate("/cart/payment");
  };

  const submitWithoutGuaranteedDate = () => {
    dispatch(clearEDD());
    dispatch(addEDD(deliveryDates));
    canUpdateShippingDetails();
    navigate("/cart/payment");
  };

  const onSubmit = async ({ guaranteedDate }) => {
    await new Promise((resolve) => setTimeout(resolve, 800));

    if (guaranteedDate) {
      submitWithGuaranteedDate();
      return;
    }
    submitWithoutGuaranteedDate();
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
    return <SmallLoader />;
  }

  return (
    <form
      className="flex h-full w-full flex-col items-start gap-6"
      onSubmit={handleSubmit(onSubmit)}
    >
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

      <div className="flex w-full flex-col justify-between gap-3 sm:flex-row sm:items-center">
        <span className="text-gray86 w-full text-base font-medium sm:w-1/2">
          expected date:
        </span>

        <span className="text-neutral-black text-sm">{formattedDates}</span>
      </div>

      <div className="border-grayDF w-full border"></div>

      <GuaranteedDate dates={deliveryDates} guaranteedDate={tomorrow} />

      <div className="mt-24 w-full">
        <CheckoutFormActions
          btnText={
            isSubmitting || isUpdating ? "loading" : "continue to payment"
          }
          linkText={"information"}
          goBackUrl={"/cart/information"}
          disabledStyle={
            isUpdating || isSubmitting
              ? "bg-primary-750! w-[177px] cursor-not-allowed! hover:text-white!"
              : "hover:bg-primary-600! hover:text-white!"
          }
          isDisabled={isUpdating || isSubmitting}
        />
      </div>
    </form>
  );
}

export default CartDeliveryDetails;
