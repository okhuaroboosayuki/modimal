import { nanoid } from "nanoid";
import supabase from "./supabase";

export async function addToOrdersTable({
  status,
  total_amount,
  payment_reference,
  shipping_address,
}) {
  const {
    data: { user },
  } = await supabase.auth.getUser();

  const attemptInsert = async () => {
    const order_number = `MDM-${nanoid(8)}`;

    const { error, data } = await supabase
      .from("orders")
      .insert({
        user_id: user.id,
        order_number,
        status,
        total_amount,
        payment_reference,
        shipping_address,
      })
      .select("*");

    // retry if unique constraint violation occurs (duplicate order_number)
    if (error?.code === "23505") {
      const retry_number = `MDM-${nanoid(8)}`;
      return supabase
        .from("orders")
        .insert({
          user_id: user.id,
          order_number: retry_number,
          status,
          total_amount,
          payment_reference,
          shipping_address,
        })
        .select("*");
    }

    if (error) throw new Error(error.message);

    return { data };
  };

  const { data } = await attemptInsert();
  return data[0];
}

export async function addToOrderItemsTable({ order_id, cartItems }) {
  const rows = cartItems.map((item) => ({
    order_id,
    product_id: item.product_id,
    quantity: item.quantity,
    price_at_purchase: item.products.price,
    size: item.selected_size,
    color: item.selected_color,
  }));

  const { error } = await supabase.from("order_items").insert(rows);

  if (error) {
    throw new Error(error.message);
  }
}
