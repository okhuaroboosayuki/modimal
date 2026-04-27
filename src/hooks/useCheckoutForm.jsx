import { useContext } from "react";
import { CheckoutFormContext } from "../context/CheckoutFormContext";

export function useCheckoutForm() {
  const context = useContext(CheckoutFormContext);

  if (context === undefined) return null;

  return context;
}
