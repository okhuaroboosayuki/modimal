import { useMutation } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { signUpWithEmailAndPassword } from "../../services/apiAuth";

export function useSignUp() {
  const navigate = useNavigate();

  const { mutate: signUp, isPending: isLoading } = useMutation({
    mutationFn: signUpWithEmailAndPassword,
    onSuccess: () => {
      toast.success(
        "Sign up successful! Please check your email to confirm your account.",
      );
      navigate("/login", { replace: true });
    },
    onError: (error) => {
      toast.error(error.message);
    },
  });

  return { signUp, isLoading };
}
