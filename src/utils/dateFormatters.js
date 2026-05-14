import { differenceInDays, format } from "date-fns";

export function isDaysUpToTwoWeeks(createdAt) {
  const diffInDays = differenceInDays(new Date(), createdAt);
  return diffInDays <= 14;
}

/**
 * Takes an ordinal suffix for a day number.
 * e.g. 13 → "13th", 1 → "1st", 2 → "2nd", 3 → "3rd"
 */
function getOrdinal(day) {
  const suffixes = ["th", "st", "nd", "rd"];
  const v = day % 100;
  return day + (suffixes[(v - 20) % 10] || suffixes[v] || suffixes[0]);
}

/**
 * Formats an array of delivery dates into a human-readable string.
 * If range is true, it formats as "between [first date] and [last date]".
 * If range is false, it formats only the first date.
 *
 * Example output: "between Monday, 1st of January 2024 and Wednesday, 3rd of January 2024"
 * Note: This function does not handle localization and assumes English formatting.
 *
 * @param {string[]} dates - An array of date strings.
 * @param {boolean} range - Whether to format as a range or a single date.
 * @returns {string} - The formatted delivery date(s).
 *
 * Assumes that the input dates are in a format recognized by the Date constructor.
 */
export function formatDeliveryDates(dates, range = true) {
  if (!dates || dates.length === 0) return "";

  const first = new Date(dates[0]);
  const last = new Date(dates[dates.length - 1]);

  const formatSingle = (date) => {
    const day = getOrdinal(date.getDate());
    const weekday = format(date, "EEEE");
    const month = format(date, "MMMM");
    const year = format(date, "yyyy");
    return `${weekday}, ${day} of ${month} ${year}`;
  };

  if (!range) return formatSingle(first);

  return `between ${formatSingle(first)} and ${formatSingle(last)}`;
}
