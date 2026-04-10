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
  productId,
  quantity,
  selectedSize,
  selectedColor,
  product,
}) {
  const cart = getGuestCart();
  const existing = cart.find(
    (item) =>
      item.product_id === productId &&
      item.selected_size === selectedSize &&
      item.selected_color === selectedColor,
  );

  if (existing) {
    existing.quantity += quantity;
    toast.success("Quantity increased");
  } else {
    cart.push({
      product_id: productId,
      quantity,
      selected_size: selectedSize,
      selected_color: selectedColor,
      product_details: product,
    });
    toast.success("Item added to cart");
  }

  saveGuestCart(cart);
  return cart;
}

export function removeFromGuestCart({
  productId,
  selectedSize,
  selectedColor,
}) {
  const cart = getGuestCart().filter(
    (item) =>
      !(
        item.product_id === productId &&
        item.selected_size === selectedSize &&
        item.selected_color === selectedColor
      ),
  );

  saveGuestCart(cart);
  toast.success("Item removed from cart");
  return cart;
}

export function updateGuestCartQuantity({
  productId,
  selectedSize,
  selectedColor,
  quantity,
}) {
  const cart = getGuestCart().map((item) =>
    item.product_id === productId &&
    item.selected_size === selectedSize &&
    item.selected_color === selectedColor
      ? { ...item, quantity }
      : item,
  );

  saveGuestCart(cart);
  return cart;
}

export function updateGuestCartItem({
  productId,
  selectedSize,
  selectedColor,
}) {
  const cart = getGuestCart();

  const existing = cart.find((item) => item.product_id === productId);
  if (!existing) return;

  const colorChanged =
    selectedColor && selectedColor !== existing.selected_color;
  const sizeChanged = selectedSize && selectedSize !== existing.selected_size;

  if (!colorChanged && !sizeChanged) return;

  const newCart = cart.map((item) =>
    item.product_id === productId
      ? {
          ...item,
          ...(colorChanged && { selected_color: selectedColor }),
          ...(sizeChanged && { selected_size: selectedSize }),
        }
      : item,
  );

  saveGuestCart(newCart);
  toast.success(colorChanged ? "Color updated" : "Size updated");
}
