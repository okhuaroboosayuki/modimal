import toast from "react-hot-toast";
import supabase from "./supabase";
import { applyFilters, applySort } from "../utils/queryHelpers";
import { subDays } from "date-fns";

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

  const { data, error } = await query.order("created_at", { ascending: false });

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
  let query = supabase.from("products").select("*");

  if (category) {
    query = query.eq("category", category);
  }

  query = applySort(query, sortBy);
  query = applyFilters(query, filters);

  const { data, error } = await query.order("created_at", { ascending: false });

  if (error) {
    console.error(error);
    toast.error("Products could not be loaded");
  }

  return { data };
}

// get new products
export async function getNewProducts({ sortBy = null, filters = {} }) {
  let query = supabase.from("products").select("*");

  const sevenDaysAgo = subDays(new Date(), 7).toISOString();

  query = query.gte("created_at", sevenDaysAgo);
  query = applySort(query, sortBy);
  query = applyFilters(query, filters);

  const { data, error } = await query.order("created_at", { ascending: false });

  if (error) {
    console.error(error);
    toast.error("Products could not be loaded");
  }

  return { data };
}
