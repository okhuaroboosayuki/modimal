export function getCardType(number) {
  if (/^4[0-9]/.test(number)) return "visa";
  if (/^5[1-5]/.test(number)) return "mastercard";
  if (/^3[47]/.test(number)) return "amex";
  return null;
}
