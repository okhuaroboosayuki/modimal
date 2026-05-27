const CHECKOUT_STORAGE_KEY = "modimalCheckout";

function canUseStorage() {
  return typeof window !== "undefined" && Boolean(window.localStorage);
}

function isEmptyCheckoutState(state) {
  return (
    !state.shippingDetails &&
    !state.expectedDeliveryDate &&
    !state.guaranteedDelivery?.date &&
    !state.deliveryAddress &&
    !state.totalAmount
  );
}

export function loadCheckoutState(fallbackState) {
  if (!canUseStorage()) return fallbackState;

  try {
    const storedState = window.localStorage.getItem(CHECKOUT_STORAGE_KEY);
    if (!storedState) return fallbackState;

    const parsedState = JSON.parse(storedState);

    return {
      ...fallbackState,
      ...parsedState,
      guaranteedDelivery: {
        ...fallbackState.guaranteedDelivery,
        ...parsedState.guaranteedDelivery,
      },
    };
  } catch {
    return fallbackState;
  }
}

export function saveCheckoutState(state) {
  if (!canUseStorage()) return;

  if (isEmptyCheckoutState(state)) {
    window.localStorage.removeItem(CHECKOUT_STORAGE_KEY);
    return;
  }

  window.localStorage.setItem(
    CHECKOUT_STORAGE_KEY,
    JSON.stringify({
      shippingDetails: state.shippingDetails,
      expectedDeliveryDate: state.expectedDeliveryDate,
      guaranteedDelivery: state.guaranteedDelivery,
      deliveryAddress: state.deliveryAddress,
      totalAmount: state.totalAmount,
    }),
  );
}

export function clearCheckoutState() {
  if (!canUseStorage()) return;

  window.localStorage.removeItem(CHECKOUT_STORAGE_KEY);
}
