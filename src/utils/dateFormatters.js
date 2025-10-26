import { differenceInDays } from "date-fns";

export function isDaysUpToTwoWeeks(createdAt) {
  const diffInDays = differenceInDays(new Date(), createdAt);
  return diffInDays <= 14;
}
