import { useMutation } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { sendResetPasswordEmail } from "../../services/apiAuth";

export function useSendResetPassword() {
  const { mutate: sendPasswordResetLink, isPending: isLoading } = useMutation({
    mutationFn: sendResetPasswordEmail,
    onSuccess: () => {
      toast.success("Password reset link sent! Please check your email.");
    },
    onError: (error) => {
      toast.error(error.message);
    },
  });

  return { sendPasswordResetLink, isLoading };
}
