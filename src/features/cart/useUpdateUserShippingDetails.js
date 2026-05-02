import { useMutation, useQueryClient } from "@tanstack/react-query";
import { updateCurrentUserData } from "../../services/apiAuth";
import toast from "react-hot-toast";

export function useUpdateUserShippingDetails() {
  const queryClient = useQueryClient();

  const { mutate: updateShipping, isPending: isUpdating } = useMutation({
    mutationFn: updateCurrentUserData,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["user"] });
      toast.success("Shipping details saved");
    },
    onError: (error) => {
      toast.error(error.message);
    },
  });

  return { updateShipping, isUpdating };
}
