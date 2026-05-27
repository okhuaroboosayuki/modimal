import { useSelector } from "react-redux";
import { useForm } from "react-hook-form";
import { useState } from "react";
import CartPageHeader from "../cart/CartPageHeader";
import EmptyDetails from "../cart/EmptyDetails";
import CartFlowBreadCrumbs from "../cart/CartFlowBreadCrumbs";
import CheckBox from "../CheckBox";
import AlternativeBillingAddress from "../../features/payment/AlternativeBillingAddress";
import PaymentForm from "../../features/payment/PaymentForm";

function PaymentContainer() {
  const {
    register,
    watch,
    setValue,
    setError,
    clearErrors,
    trigger,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const { shippingDetails, expectedDeliveryDate } = useSelector(
    (store) => store.checkoutReducer,
  );
  const [isSameAsShippingChecked, setIsSameAsShippingChecked] = useState(true);
  const [
    isAlternativeBillingAddressChecked,
    setIsAlternativeBillingAddressChecked,
  ] = useState(false);

  const handleSameAsShippingClick = () => {
    if (isSameAsShippingChecked) {
      setIsSameAsShippingChecked(false);
      clearErrors();
      return;
    }

    if (isAlternativeBillingAddressChecked) {
      setIsAlternativeBillingAddressChecked(false);
      setIsSameAsShippingChecked(true);
      clearErrors();
      return;
    }

    clearErrors();
    setIsSameAsShippingChecked(true);
  };

  const handleAlternativeBillingAddressClick = () => {
    if (isAlternativeBillingAddressChecked) {
      setIsAlternativeBillingAddressChecked(false);
      clearErrors();
      return;
    }

    if (isSameAsShippingChecked) {
      setIsSameAsShippingChecked(false);
      setIsAlternativeBillingAddressChecked(true);
      clearErrors();
      return;
    }

    clearErrors();
    setIsAlternativeBillingAddressChecked(true);
  };

  const handlePaymentSubmit = (data) => {
    console.log(
      "submit hit",
      isSameAsShippingChecked,
      isAlternativeBillingAddressChecked,
    );
    if (!isSameAsShippingChecked && !isAlternativeBillingAddressChecked) {
      setError("billingAddress", {
        type: "manual",
        message: "Please select a billing address option",
      });
      return;
    }

    let shippingDetailsToSubmit = null;
    console.log(data);

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
      console.log("Payment Data:", shippingDetailsToSubmit);
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

    console.log("Payment Data:", shippingDetailsToSubmit);
  };

  return (
    <section className="flex w-full flex-col items-start justify-start gap-8 px-5 pb-30 capitalize sm:px-8 lg:px-12 lg:pt-8 xl:px-15">
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

            <PaymentForm
              register={register}
              watch={watch}
              errors={errors}
              setValue={setValue}
              trigger={trigger}
            />
          </form>
        )}
      </>
    </section>
  );
}

export default PaymentContainer;
