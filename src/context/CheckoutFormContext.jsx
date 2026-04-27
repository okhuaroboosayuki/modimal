import { createContext } from "react";
import { useForm } from "react-hook-form";

export const CheckoutFormContext = createContext();

export function CheckoutFormProvider({ children }) {
  const methods = useForm();

  return (
    <CheckoutFormContext.Provider value={{ ...methods }}>
      {children}
    </CheckoutFormContext.Provider>
  );
}
