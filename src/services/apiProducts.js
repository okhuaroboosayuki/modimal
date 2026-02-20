import toast from "react-hot-toast";
import supabase from "./supabase";
import { applyFilters, applySort } from "../utils/queryHelpers";
import { subDays } from "date-fns";

// get all products or search for a product,
export async function getProducts({
  searchValue = null,
  sortBy = null,
  filters = {},
  page = 0,
  pageSize = 12,
}) {
  const from = page * pageSize;
  const to = from + pageSize - 1;

  let query;

  //if searching
  if (searchValue !== null) {
    query = supabase.rpc(
      "search_products",
      { search: `${searchValue}` },
      { count: "exact" },
    );
  } else {
    query = supabase
      .from("products")
      .select(
        "id, created_at, productName, category, price, availableColors, fabricDetails, stockQuantity, totalSold, availableSizes, productTag, productImages, discountPercentage, modiweek",
        { count: "exact" },
      );
  }

  // pagination
  query = query.range(from, to);

  // Apply sorting and filters
  query = applySort(query, sortBy);
  query = applyFilters(query, filters);

  const { data, error, count } = await query.order("created_at", {
    ascending: false,
  });

  if (error) {
    console.error(error);
    toast.error("Products could not be loaded");
  }

  return { data, count };
}

// get single product by id
export async function getProduct(id) {
  const { data, error } = await supabase
    .from("products")
    .select("*")
    .eq("id", id);

  if (error) {
    console.error(error);
    toast.error("Product could not be loaded");
  }

  return { data };
}

// get products by category
export async function getProductsByCategory(
  category,
  { sortBy = null, filters = {} },
  page = 0,
  pageSize = 12,
) {
  const from = page * pageSize;
  const to = from + pageSize - 1;

  let query = supabase
    .from("products")
    .select(
      "id, created_at, productName, category, price, availableColors, fabricDetails, stockQuantity, totalSold, availableSizes, productTag, productImages, discountPercentage, modiweek",
      { count: "exact" },
    );

  if (category) {
    query = query.eq("category", category);
  }

  query = query.range(from, to);

  query = applySort(query, sortBy);
  query = applyFilters(query, filters);

  const { data, error, count } = await query.order("created_at", {
    ascending: false,
  });

  if (error) {
    console.error(error);
    toast.error("Products could not be loaded");
  }

  return { data, count };
}

// get new products
export async function getNewProducts({
  sortBy = null,
  filters = {},
  page = 0,
  pageSize = 12,
}) {
  const from = page * pageSize;
  const to = from + pageSize - 1;

  let query = supabase
    .from("products")
    .select(
      "id, created_at, productName, category, price, availableColors, fabricDetails, stockQuantity, totalSold, availableSizes, productTag, productImages, discountPercentage, modiweek",
      { count: "exact" },
    );

  const fourteenDaysAgo = subDays(new Date(), 14).toISOString();

  query = query.gte("created_at", fourteenDaysAgo);
  query = applySort(query, sortBy);
  query = applyFilters(query, filters);

  query = query.range(from, to);

  const { data, error, count } = await query.order("created_at", {
    ascending: false,
  });

  if (error) {
    console.error(error);
    toast.error("Products could not be loaded");
  }

  return { data, count };
}

export async function getProductsByModiweek({
  sortBy,
  filters,
  page = 0,
  pageSize = 12,
}) {
  const from = page * pageSize;
  const to = from + pageSize - 1;

  let query = supabase
    .from("products")
    .select(
      "id, created_at, productName, category, price, availableColors, fabricDetails, stockQuantity, totalSold, availableSizes, productTag, productImages, discountPercentage, modiweek",
      { count: "exact" },
    );

  query = query.neq("modiweek", null);
  query = applySort(query, sortBy);
  query = applyFilters(query, filters);

  query = query.range(from, to);

  const { data, error, count } = await query.order("created_at", {
    ascending: false,
  });

  if (error) {
    console.error(error);
    toast.error("Products could not be loaded");
  }

  return { data, count };
}

export async function getProductsByPlusSize({
  sortBy,
  filters,
  page = 0,
  pageSize = 12,
}) {
  const from = page * pageSize;
  const to = from + pageSize - 1;

  let query = supabase.rpc(
    "get_products_with_plus_size",
    { _size: "XL" },
    { count: "exact" },
  );

  query = applySort(query, sortBy);
  query = applyFilters(query, filters);

  query = query.range(from, to);

  const { data, error, count } = await query.order("created_at", {
    ascending: false,
  });

  if (error) {
    console.error(error);
    toast.error("Products could not be loaded");
  }

  return { data, count };
}

export async function getProductsByBestSeller({
  sortBy,
  filters,
  page = 0,
  pageSize = 12,
}) {
  const from = page * pageSize;
  const to = from + pageSize - 1;

  let query = supabase
    .from("products")
    .select(
      "id, created_at, productName, category, price, availableColors, fabricDetails, stockQuantity, totalSold, availableSizes, productTag, productImages, discountPercentage, modiweek",
      { count: "exact" },
    );

  query = applySort(query, sortBy);
  query = applyFilters(query, filters);
  query = query.order("totalSold", { ascending: false });

  query = query.range(from, to);

  const { data, error, count } = await query;

  if (error) {
    console.error(error);
    toast.error("Products could not be loaded");
  }

  return { data, count };
}
