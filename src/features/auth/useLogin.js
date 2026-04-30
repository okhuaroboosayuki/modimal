import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { signInWithEmailAndPassword } from "../../services/apiAuth";
import { getGuestCart } from "../../utils/guestCart";
import { migrateGuestCart } from "../../services/apiCart";

export function useLogin() {
  const navigate = useNavigate();
  const queryClient = useQueryClient();

  const { mutate: login, isPending: isLoading } = useMutation({
    mutationFn: signInWithEmailAndPassword,
    onSuccess: async (_, { redirectTo }) => {
      const guestCartItems = getGuestCart();

      if (guestCartItems.length > 0) {
        await migrateGuestCart(guestCartItems);
      }

      queryClient.invalidateQueries(["cart"]);
      queryClient.invalidateQueries(["user"]);
      toast.success("Login successful");
      navigate(redirectTo ?? "/", { replace: true });
    },
    onError: (error) => {
      toast.error(error.message);
    },
  });

  return { login, isLoading };
}
