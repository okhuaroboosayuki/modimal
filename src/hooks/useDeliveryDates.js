import { useQuery } from "@tanstack/react-query";
import { getCountryCode } from "../utils/countryCodeMap";
import supabase from "./../services/supabase";

export function useDeliveryDates(countryName, count) {
  const countryCode = getCountryCode(countryName);

  const { data: deliveryDates, isPending: isLoading } = useQuery({
    queryKey: ["deliveryDates", countryCode],
    queryFn: async () => {
      const { data, error } = await supabase.functions.invoke(
        "get-delivery-dates",
        {
          body: { countryCode },
        },
      );

      if (error) throw new Error(error.message);
      return data.dates;
    },
    enabled: !!countryCode && count > 0,
    staleTime: 1000 * 60 * 60,
  });

  return { deliveryDates, isLoading };
}
