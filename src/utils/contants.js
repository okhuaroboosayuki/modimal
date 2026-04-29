export const PAGE_SIZE = 6;

export const sizeOptions = [
  { value: "XS", label: "xs / us (0-4)" },
  { value: "S", label: "s / us (4-6)" },
  { value: "M", label: "m / us (6-10)" },
  { value: "L", label: "l / us (10-14)" },
  { value: "XL", label: "xl / us (14-18)" },
  { value: "XXL", label: "xxl / us (18-22)" },
];

export const sortOptions = [
  { value: "featured", label: "featured" },
  { value: "bestseller", label: "best seller" },
  { value: "price-asc", label: "price: low to high" },
  { value: "price-desc", label: "price: high to low" },
];

export const collectionOptions = [
  { value: "inStock", label: "in stock" },
  { value: "outOfStock", label: "out of stock" },
];

export const POSTAL_PATTERNS = {
  "United States": {
    value: /^[0-9]{5}$/,
    message: "US Zip codes must be exactly 5 digits",
  },
  "United Kingdom": {
    value: /^[A-Z]{1,2}[0-9][A-Z0-9]? [0-9][A-Z]{2}$/i,
    message: "Please enter a valid UK postcode (e.g., SW1W 0NY)",
  },
  default: {
    value: /^[A-Za-z0-9\s-]+$/,
    message: "Invalid postal code format",
  },
};

export const PHONE_PATTERNS = {
  "United States": {
    // Matches 10 digits: (555) 555-5555 or 5555555555
    value: /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/,
    message: "Please enter a valid 10-digit US phone number",
  },
  "United Kingdom": {
    // Supports +44 or 0 prefix,
    // handles mobile (7) and landlines (1-6),
    // allows optional spaces or hyphens
    value:
      /^(?:(?:(?:\+44|44)|0)7[0-9]{9})$|^(?:(?:(?:\+44|44)|0)[1-6][0-9]{8,9})$/,
    message: "Please enter a valid UK phone number",
  },
  default: {
    // Allows numbers, plus sign, hyphens, and spaces (minimum 7 characters)
    value: /^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s./0-9]{7,}$/,
    message: "Please enter a valid phone number",
  },
};
