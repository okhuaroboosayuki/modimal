import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { updateCurrentUserData } from "../../services/apiAuth";
import { useNavigate } from "react-router-dom";

export function useUpdateUserShippingDetails() {
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  const { mutate: updateShipping, isPending: isUpdating } = useMutation({
    mutationFn: updateCurrentUserData,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["user"] });
      toast.success("Shipping details saved");
      navigate("/cart/payment");
    },
    onError: (error) => {
      toast.error(error.message);
    },
  });

  return { updateShipping, isUpdating };
}
