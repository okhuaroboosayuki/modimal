import PaystackPop from "@paystack/inline-js";
import { useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";
import { useMutation } from "@tanstack/react-query";
import { useDispatch } from "react-redux";
import { verifyPayment } from "../../services/apiPayment";
import {
  addToOrderItemsTable,
  addToOrdersTable,
} from "../../services/apiOrder";
import { clearState, setOrderNumber } from "../cart/checkoutSlice";
import { clearCheckoutState } from "../../utils/checkoutStorage";
import { clearCart } from "../../services/apiCart";

export function usePayment() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handler = new PaystackPop();

  const { mutate: pay, isPending: isLoading } = useMutation({
    mutationFn: ({
      amount,
      email,
      firstName,
      lastName,
      shippingAddress,
      cartItems,
    }) => {
      return new Promise((resolve, reject) => {
        handler.newTransaction({
          key: import.meta.env.VITE_PAYSTACK_PUBLIC_KEY,
          email,
          amount: amount * 100,
          firstName,
          lastName,

          onSuccess: async (transaction) => {
            try {
              if (transaction.status === "success") {
                const { data } = await verifyPayment({
                  reference: transaction.reference,
                });
                resolve({
                  status: data.status,
                  reference: transaction.reference,
                  amount,
                  cartItems,
                  shippingAddress,
                });
              }
            } catch (err) {
              reject(err);
            }
          },

          onCancel: () => {
            reject(new Error("cancelled"));
          },

          onError: (error) => {
            reject(new Error(error.message));
          },
        });
      });
    },

    onSuccess: async ({
      status,
      reference,
      amount,
      shippingAddress,
      cartItems,
    }) => {
      if (status === "success") {
        const { id, order_number } = await addToOrdersTable({
          status,
          total_amount: amount,
          payment_reference: reference,
          shipping_address: shippingAddress,
        });
        await addToOrderItemsTable({ order_id: id, cartItems });

        dispatch(setOrderNumber(order_number));

        navigate("/checkout/success", {
          replace: true,
        });

        dispatch(clearState());
        clearCheckoutState();
        await clearCart();
      } else {
        toast.error("Payment failed");
        navigate("/checkout/error");
      }
    },

    onError: (error) => {
      if (error.message === "cancelled") {
        toast.error("Payment cancelled");
      } else {
        console.error("Error", error.message);
        toast.error("Something went wrong");
        navigate("/checkout/error", { replace: true });
      }
    },
  });

  return { pay, isLoading };
}
