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
  let query;

  //if searching
  if (searchValue !== null) {
    query = supabase.rpc("search_products", { search: `${searchValue}` });
  } else {
    query = supabase
      .from("products")
      .select(
        "id, created_at, productName, category, price, availableColors, fabricDetails, stockQuantity, totalSold, availableSizes, productTag, productImages, discountPercentage, modiweek",
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
  let query = supabase
    .from("products")
    .select(
      "id, created_at, productName, category, price, availableColors, fabricDetails, stockQuantity, totalSold, availableSizes, productTag, productImages, discountPercentage, modiweek",
    );

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
  let query = supabase
    .from("products")
    .select(
      "id, created_at, productName, category, price, availableColors, fabricDetails, stockQuantity, totalSold, availableSizes, productTag, productImages, discountPercentage, modiweek",
    );

  const fourteenDaysAgo = subDays(new Date(), 14).toISOString();

  query = query.gte("created_at", fourteenDaysAgo);
  query = applySort(query, sortBy);
  query = applyFilters(query, filters);

  const { data, error } = await query.order("created_at", { ascending: false });

  if (error) {
    console.error(error);
    toast.error("Products could not be loaded");
  }

  return { data };
}

export async function getProductsByModiweek({ sortBy, filters }) {
  let query = supabase
    .from("products")
    .select(
      "id, created_at, productName, category, price, availableColors, fabricDetails, stockQuantity, totalSold, availableSizes, productTag, productImages, discountPercentage, modiweek",
    );

  query = query.neq("modiweek", null);
  query = applySort(query, sortBy);
  query = applyFilters(query, filters);

  const { data, error } = await query.order("created_at", { ascending: false });

  if (error) {
    console.error(error);
    toast.error("Products could not be loaded");
  }

  return { data };
}

export async function getProductsByPlusSize({ sortBy, filters }) {
  let query = supabase.rpc("get_products_with_plus_size", { _size: "XL" });

  query = applySort(query, sortBy);
  query = applyFilters(query, filters);

  const { data, error } = await query.order("created_at", { ascending: false });

  if (error) {
    console.error(error);
    toast.error("Products could not be loaded");
  }

  return { data };
}

export async function getProductsByBestSeller({ sortBy, filters }) {
  let query = supabase
    .from("products")
    .select(
      "id, created_at, productName, category, price, availableColors, fabricDetails, stockQuantity, totalSold, availableSizes, productTag, productImages, discountPercentage, modiweek",
    );

  query = query.order("totalSold", { ascending: false });
  query = applySort(query, sortBy);
  query = applyFilters(query, filters);

  const { data, error } = await query;

  if (error) {
    console.error(error);
    toast.error("Products could not be loaded");
  }

  return { data };
}
