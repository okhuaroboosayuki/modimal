import toast from "react-hot-toast";
import supabase from "./supabase";
import { applyFilters, applySort } from "../utils/queryHelpers";

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
    toast.error("Products could not be loaded");
  }

  return { data };
}

// get products by category
export async function getProductsByCategory(
  category,
  { sortBy = null, filters = {} },
) {
  console.log(category);

  let query = supabase.from("products").select("*");

  if (category) {
    query = query.eq("category", category);
  }

  query = applySort(query, sortBy);
  query = applyFilters(query, filters);

  const { data, error } = await query;

  if (error) {
    console.error(error);
    toast.error("Products could not be loaded");
  }

  return { data };
}
