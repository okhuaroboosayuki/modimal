import { useNavigate } from "react-router-dom";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { updateCurrentUserData } from "../../services/apiAuth";

export function useUpdateUser() {
  const navigate = useNavigate();
  const queryClient = useQueryClient();

  const { mutate: updateUser, isPending: isLoading } = useMutation({
    mutationFn: updateCurrentUserData,
    onSuccess: (user) => {
      queryClient.setQueryData(["new-user-data"], user.user);
      toast.success("Password updated successfully");
      navigate("/login", { replace: true });
    },
    onError: (error) => {
      toast.error(error.message);
    },
  });

  return { updateUser, isLoading };
}
