import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { useUser } from "../features/auth/useUser";
import { CheckoutFormContext } from "./CheckoutFormContext";
import { setShippingDetails } from "../features/cart/checkoutSlice";

export function CheckoutFormProvider({ children }) {
  const dispatch = useDispatch();
  const { data } = useUser();
  const { shippingDetails } = useSelector((store) => store.checkoutReducer);

  useEffect(() => {
    if (shippingDetails || !data || data?.aud !== "authenticated") return;

    const metadata = data.user_metadata || {};
    const hasUserShippingData =
      metadata.fullName ||
      metadata.address ||
      metadata.country ||
      metadata.state ||
      metadata.postalCode ||
      metadata.phone ||
      metadata.company ||
      metadata.apartment;

    if (!hasUserShippingData) return;

    dispatch(
      setShippingDetails({
        email: data.email ?? "",
        subscribeToNewsletter: metadata.subscribeToNewsletter ?? false,
        country: metadata.country ?? "",
        company: metadata.company ?? "",
        apartment: metadata.apartment ?? "",
        postalCode: metadata.postalCode ?? "",
        fullName: metadata.fullName ?? "",
        state: metadata.state ?? "",
        address: metadata.address ?? "",
        phone: metadata.phone ?? "",
      }),
    );
  }, [data, dispatch, shippingDetails]);

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
        data?.user_metadata?.fullName?.split(" ")[0] ||
        shippingDetails?.fullName?.split(" ")[0],
      lastName:
        data?.user_metadata?.fullName?.split(" ")[1] ||
        shippingDetails?.fullName?.split(" ")[1],
      state: (data?.user_metadata?.state || shippingDetails?.state) ?? "",
      address: (data?.user_metadata?.address || shippingDetails?.address) ?? "",
      phone: (data?.user_metadata?.phone || shippingDetails?.phone) ?? "",
      saveShippingAddress: shippingDetails?.saveShippingAddress,
    },
  });

  return (
    <CheckoutFormContext.Provider value={{ ...methods }}>
      {children}
    </CheckoutFormContext.Provider>
  );
}
