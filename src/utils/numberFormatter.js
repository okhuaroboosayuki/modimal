export const formatCurrency = (value) =>
  new Intl.NumberFormat("en-NG", { style: "currency", currency: "NGN" }).format(
    value,
  );
export const currencies = Intl.supportedValuesOf("currency");
