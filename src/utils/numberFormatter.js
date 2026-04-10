export const formatCurrency = (value, fraction = 2) =>
  new Intl.NumberFormat("en-NG", {
    style: "currency",
    currency: "NGN",
    maximumFractionDigits: fraction,
  }).format(value);
export const currencies = Intl.supportedValuesOf("currency");
