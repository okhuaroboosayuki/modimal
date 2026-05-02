import { createContext } from "react";
import { useForm } from "react-hook-form";
import { useUser } from "../features/auth/useUser";
import { useSelector } from "react-redux";

export const CheckoutFormContext = createContext();

export function CheckoutFormProvider({ children }) {
  const { data } = useUser();
  const { shippingDetails } = useSelector((store) => store.checkoutReducer);

  const methods = useForm({
    values: {
      email: (data?.email || shippingDetails?.email) ?? "",
      subscribeToNewsletter:
        (data?.user_metadata?.subscribeToNewsletter ||
          shippingDetails?.subscribeToNewsletter) ??
        false,
      country: (data?.user_metadata?.country || shippingDetails?.country) ?? "",
      company: (data?.user_metadata?.company || shippingDetails?.company) ?? "",
      apartment:
        (data?.user_metadata?.apartment || shippingDetails?.apartment) ?? "",
      postalCode:
        (data?.user_metadata?.postalCode || shippingDetails?.postalCode) ?? "",
      firstName:
        data?.user_metadata?.fullName.split(" ")[0] ||
        shippingDetails?.fullName.split(" ")[0],
      lastName:
        data?.user_metadata?.fullName.split(" ")[1] ||
        shippingDetails?.fullName.split(" ")[1],
      state: (data?.user_metadata?.state || shippingDetails?.state) ?? "",
      address: (data?.user_metadata?.address || shippingDetails?.address) ?? "",
      phone: (data?.user_metadata?.phone || shippingDetails?.phone) ?? "",
    },
  });

  return (
    <CheckoutFormContext.Provider value={{ ...methods }}>
      {children}
    </CheckoutFormContext.Provider>
  );
}
