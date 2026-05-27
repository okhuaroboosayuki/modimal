export function formatCardNumber(value, cardType) {
  // strip non-digits like letters and spaces
  const digits = value.replace(/\D/g, "");

  if (cardType === "amex") {
    const p1 = digits.slice(0, 4);
    const p2 = digits.slice(4, 10);
    const p3 = digits.slice(10, 15);
    return [p1, p2, p3].filter(Boolean).join(" ");
  }

  // visa & mastercard: groups of 4
  return digits
    .slice(0, 16)
    .replace(/(.{4})/g, "$1 ")
    .trim();
}
