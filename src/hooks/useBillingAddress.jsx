import { useState } from "react";

export default function useBillingAddress(clearErrors) {
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

  return {
    isSameAsShippingChecked,
    isAlternativeBillingAddressChecked,
    handleSameAsShippingClick,
    handleAlternativeBillingAddressClick,
  };
}
