import supabase from "./supabase";

// get all products
export async function getProducts() {
  const { data, error, count } = await supabase
    .from("products")
    .select("*", { count: "exact", head: true });

  if (error) {
    console.error(error);
    throw new Error("Bookings could not be loaded");
  }

  return { data, error, count };
}

// search products
export async function searchProducts(searchValue) {
  const { data, error } = await supabase.rpc("search_products", {
    search: searchValue,
  });

  if (error) {
    console.error(error);
    throw new Error("Bookings could not be loaded");
  }

  return { data };
}
