import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import { getModiweekProductByDay } from "../../services/apiProducts";

export function useModiweekProductByDay() {
  const { day } = useParams();

  const date = new Date();
  const dayInLongFormat = date
    .toLocaleDateString("en-US", { weekday: "long" })
    .toLocaleLowerCase();

  const dayOfTheWeek = day || dayInLongFormat;

  const { data, isPending: isLoading } = useQuery({
    queryKey: ["modiweekDayProduct", dayOfTheWeek],
    queryFn: () => getModiweekProductByDay({ dayOfTheWeek }),
  });

  const modiweekDayProduct = data?.data;

  return { modiweekDayProduct, isLoading };
}
