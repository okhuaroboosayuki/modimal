import { clearGuestCart } from "../utils/guestCart";
import supabase from "./supabase";

export async function migrateGuestCart(guestCartItems) {
  if (!guestCartItems || guestCartItems.length === 0) return;

  const {
    data: { user },
  } = await supabase.auth.getUser();

  const cartItemsToMigrate = guestCartItems.map(
    ({ product_id, quantity, selected_size, selected_color }) => ({
      user_id: user.id,
      product_id,
      quantity,
      selected_size,
      selected_color,
    }),
  );

  const { error } = await supabase.from("cart").upsert(cartItemsToMigrate, {
    onConflict: "user_id, product_id, selected_size, selected_color",
  });

  if (error) throw new Error(error);

  clearGuestCart();
}

export async function getCart() {
  const { data, error, count } = await supabase
    .from("cart")
    .select(
      "id, product_id, quantity, selected_size, selected_color, products(*)",
      { count: "exact" },
    )
    .order("created_at", { ascending: true });

  if (error) throw new Error(error);

  return { data, count };
}

export async function addToCart({
  user_id,
  product_id,
  quantity,
  selected_size,
  selected_color,
}) {
  const { error } = await supabase.from("cart").upsert(
    {
      user_id,
      product_id,
      quantity,
      selected_size,
      selected_color,
    },
    {
      onConflict: "user_id, product_id, selected_size, selected_color",
    },
  );

  if (error) throw new Error(error.message);
}

export async function removeFromCart({
  product_id,
  selected_size,
  selected_color,
}) {
  const { error } = await supabase
    .from("cart")
    .delete()
    .eq("product_id", product_id)
    .eq("selected_size", selected_size)
    .eq("selected_color", selected_color);

  if (error) throw new Error(error);
}

export async function updateCartItemQuantity({
  product_id,
  quantity,
  selected_size,
  selected_color,
}) {
  const { error } = await supabase
    .from("cart")
    .update({ quantity })
    .eq("product_id", product_id)
    .eq("selected_size", selected_size)
    .eq("selected_color", selected_color);

  if (error) throw new Error(error);
}

export async function updateCartColorOrSize({
  product_id,
  selected_size,
  selected_color,
}) {
  const updates = {
    ...(selected_size && { selected_size }),
    ...(selected_color && { selected_color }),
  };

  const { error } = await supabase
    .from("cart")
    .update(updates)
    .eq("product_id", product_id);

  if (error) throw new Error(error.message);
}
