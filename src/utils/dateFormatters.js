import { differenceInDays } from "date-fns";

export function isDaysUpToOneWeek(createdAt) {
  const diffInDays = differenceInDays(new Date(), createdAt);
  return diffInDays <= 7;
}
