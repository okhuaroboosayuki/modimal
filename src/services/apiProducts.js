import { applyFilters, applySort } from "../utils/queryHelpers";
import supabase from "./supabase";

// get all products or search for a product,
export async function getProducts({
  searchValue = null,
  sortBy = null,
  filters = {},
}) {
  let query = supabase.from("products").select("*");

  //if searching
  if (searchValue !== null) {
    query = query.or(
      `productName.ilike.%${searchValue}%, category.ilike.%${searchValue}%, productTag.ilike.%${searchValue}%, fabricDetails.cs.{"type": "${searchValue}"}, fabricDetails.cs.{"tags": ["${searchValue}"]}, modiweek.ilike.%${searchValue}%, availableColors.cs.{"${searchValue}"}`,
    );
  }

  // Apply sorting and filters
  query = applySort(query, sortBy);
  query = applyFilters(query, filters);

  const { data, error } = await query;

  if (error) {
    console.error(error);
    throw new Error("Bookings could not be loaded");
  }

  return { data, error };
}
