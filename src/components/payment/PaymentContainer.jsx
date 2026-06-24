import { useSelector } from "react-redux";
import { useForm } from "react-hook-form";
import CartPageHeader from "../cart/CartPageHeader";
import EmptyDetails from "../cart/EmptyDetails";
import CartFlowBreadCrumbs from "../cart/CartFlowBreadCrumbs";
import CheckBox from "../CheckBox";
import AlternativeBillingAddress from "../../features/payment/AlternativeBillingAddress";
import PayStackPayment from "../../features/payment/PayStackPayment";
import { useDerivedCart } from "../../hooks/useDerivedCart";
import { usePayment } from "../../features/payment/usePayment";
import useBillingAddress from "../../hooks/useBillingAddress";

function PaymentContainer() {
  const { derivedCart } = useDerivedCart();

  const {
    register,
    watch,
    setValue,
    setError,
    clearErrors,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const { pay, isLoading } = usePayment();

  const { shippingDetails, expectedDeliveryDate, totalAmount } = useSelector(
    (store) => store.checkoutReducer,
  );

  const {
    isSameAsShippingChecked,
    isAlternativeBillingAddressChecked,
    handleSameAsShippingClick,
    handleAlternativeBillingAddressClick,
  } = useBillingAddress(clearErrors);

  const handlePaymentSubmit = (data) => {
    if (!isSameAsShippingChecked && !isAlternativeBillingAddressChecked) {
      setError("billingAddress", {
        type: "manual",
        message: "Please select a billing address option",
      });
      return;
    }

    let shippingDetailsToSubmit = null;

    if (isSameAsShippingChecked) {
      setError("billingAddress", null);

      shippingDetailsToSubmit = {
        fullName: shippingDetails.fullName,
        email: shippingDetails.email,
        country: shippingDetails.country,
        address: shippingDetails.address,
        city: shippingDetails.state,
        postalCode: shippingDetails.postalCode,
        phone: shippingDetails.phone,
      };

      pay({
        email: shippingDetailsToSubmit.email,
        firstName: shippingDetailsToSubmit.fullName.split(" ")[0],
        lastName: shippingDetailsToSubmit.fullName.split(" ")[1],
        amount: totalAmount,
        cartItems: derivedCart,
        shippingAddress: shippingDetailsToSubmit.address,
      });

      return;
    }

    clearErrors();

    shippingDetailsToSubmit = {
      fullName: data.fullName,
      email: data.altEmail,
      country: data.altCountry,
      address: data.altAddress,
      city: data.altCity,
      postalCode: data.altPostalCode,
      phone: data.altPhone,
    };
  };

  return (
    <section className="flex w-full flex-col items-start justify-start gap-8 px-5 pb-20 capitalize sm:px-8 lg:px-12 lg:pt-8 xl:px-15">
      <CartPageHeader />

      <CartFlowBreadCrumbs />

      <>
        {!shippingDetails || !expectedDeliveryDate ? (
          <EmptyDetails
            message="Please select a delivery date to proceed to payment"
            buttonText={"select delivery date"}
            url={"/cart/shipping"}
          />
        ) : (
          <form
            className="flex w-full flex-col items-start justify-between gap-8 text-sm sm:text-base md:flex-row md:gap-0"
            onSubmit={handleSubmit(handlePaymentSubmit)}
          >
            <section className="flex w-full flex-col gap-4">
              <h2 className="text-neutral-black border-b-grayDF border-b pb-4 font-semibold">
                billing address
              </h2>

              <section className="flex w-full flex-col items-start gap-4 md:w-fit lg:pr-32 xl:pr-48">
                <span
                  className={`text-error block text-sm ${errors.billingAddress ? "visible" : "invisible"}`}
                >
                  {errors.billingAddress?.message}
                </span>

                <CheckBox
                  label={"default (same as shipping address)"}
                  isChecked={isSameAsShippingChecked}
                  handleChange={handleSameAsShippingClick}
                  className={"text-sm sm:text-base"}
                />

                <AlternativeBillingAddress
                  register={register}
                  watch={watch}
                  errors={errors}
                  setValue={setValue}
                  isChecked={isAlternativeBillingAddressChecked}
                  onChange={handleAlternativeBillingAddressClick}
                />
              </section>
            </section>

            <PayStackPayment totalAmount={totalAmount} disabled={isLoading} />
          </form>
        )}
      </>
    </section>
  );
}

export default PaymentContainer;
