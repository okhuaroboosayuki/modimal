import { useSyncExternalStore } from "react";
import toast from "react-hot-toast";

const GUEST_CART_KEY = "guestCart";

let cachedCart = [];
let cachedString = null;

function dispatchCartUpdateEvent() {
  window.dispatchEvent(new Event("cartUpdated"));
}

function subscribe(callback) {
  window.addEventListener("cartUpdated", callback);
  return () => window.removeEventListener("cartUpdated", callback);
}

function getSnapshot() {
  return getGuestCart();
}

export function useGuestCart() {
  return useSyncExternalStore(subscribe, getSnapshot);
}

export function getGuestCart() {
  const raw = localStorage.getItem(GUEST_CART_KEY);

  if (raw === cachedString) return cachedCart;

  cachedString = raw;
  cachedCart = raw ? JSON.parse(raw) : [];
  return cachedCart;
}

export function saveGuestCart(items) {
  localStorage.setItem(GUEST_CART_KEY, JSON.stringify(items));
  dispatchCartUpdateEvent();
}

export function clearGuestCart() {
  localStorage.removeItem(GUEST_CART_KEY);
  dispatchCartUpdateEvent();
}

export function addToGuestCart({
  product_id,
  quantity,
  selected_size,
  selected_color,
  product,
}) {
  const cart = getGuestCart();
  const existing = cart.find(
    (item) =>
      item.product_id === product_id &&
      item.selected_size === selected_size &&
      item.selected_color === selected_color,
  );

  if (existing) {
    existing.quantity += quantity;
    toast.success("Quantity increased");
  } else {
    cart.push({
      product_id,
      quantity,
      selected_size,
      selected_color,
      products: product,
    });
    toast.success("Item added to cart");
  }

  saveGuestCart(cart);
  return cart;
}

export function removeFromGuestCart({
  product_id,
  selected_size,
  selected_color,
}) {
  const cart = getGuestCart().filter(
    (item) =>
      !(
        item.product_id === product_id &&
        item.selected_size === selected_size &&
        item.selected_color === selected_color
      ),
  );

  saveGuestCart(cart);
  toast.success("Item removed from cart");
  return cart;
}

export function updateGuestCartQuantity({
  product_id,
  selected_size,
  selected_color,
  quantity,
}) {
  const cart = getGuestCart().map((item) =>
    item.product_id === product_id &&
    item.selected_size === selected_size &&
    item.selected_color === selected_color
      ? { ...item, quantity }
      : item,
  );

  saveGuestCart(cart);
  return cart;
}

export function updateGuestCartItem({
  product_id,
  selected_size,
  selected_color,
}) {
  const cart = getGuestCart();

  const existing = cart.find((item) => item.product_id === product_id);
  if (!existing) return;

  const colorChanged =
    selected_color && selected_color !== existing.selected_color;
  const sizeChanged = selected_size && selected_size !== existing.selected_size;

  if (!colorChanged && !sizeChanged) return;

  const newCart = cart.map((item) =>
    item.product_id === product_id
      ? {
          ...item,
          ...(colorChanged && { selected_color: selected_color }),
          ...(sizeChanged && { selected_size: selected_size }),
        }
      : item,
  );

  saveGuestCart(newCart);
  toast.success(colorChanged ? "Color updated" : "Size updated");
}
