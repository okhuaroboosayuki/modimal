import supabase from "./supabase";

// get all products or search, sort, filter
export async function getProducts(searchValue, sortBy, filters) {
  let query = supabase.from("products").select("*");

  //if searching
  if (searchValue) {
    query = query.or(
      `productName.ilike.%${searchValue}%, category.ilike.%${searchValue}%, productTag.ilike.%${searchValue}%, fabricDetails.cs.{"type": "${searchValue}"}, fabricDetails.cs.{"tags": ["${searchValue}"]}, modiweek.ilike.%${searchValue}%, availableColors.cs.{"${searchValue}"}`,
    );
  }

  // sorting
  if (sortBy) {
    if (sortBy === "featured") {
      query = query.order("modiweek", { ascending: true });
    }
    if (sortBy === "bestseller") {
      query = query.order("totalSold", { ascending: false });
    }
    if (sortBy === "price-asc") {
      query = query.order("price", { ascending: true });
    }
    if (sortBy === "price-desc") {
      query = query.order("price", { ascending: false });
    }
  }

  // filtering
  if (filters) {
    // size filter
    if (filters.size && filters.size.length > 0) {
      if (filters.size.length === 1) {
        query = query.or(`availableSizes.cs.[{"size": "${filters.size[0]}"}]`);
      }
      if (filters.size.length > 1) {
        filters.size.forEach((size) => {
          query = query.or(`availableSizes.cs.[{"size": "${size}"}]`);
        });
      }
    }

    // color filter
    if (filters.color && filters.color.length > 0) {
      if (filters.color.length === 1) {
        query = query.or(`availableColors.cs.{"${filters.color[0]}"}`);
      }
      if (filters.color.length > 1) {
        filters.color.forEach((color) => {
          query = query.or(`availableColors.cs.{"${color}"}`);
        });
      }
    }

    // collection filter
    if (filters.collection && filters.collection.length > 0) {
      if (filters.collection.length === 1) {
        if (filters.collection[0] === "inStock") {
          query = query.gt("stockQuantity", 0);
        }
        if (filters.collection[0] === "outOfStock") {
          query = query.eq("stockQuantity", 0);
        }
      }

      if (filters.collection.length > 1) {
        return query;
      }
    }
  }

  const { data, error } = await query;

  if (error) {
    console.error(error);
    throw new Error("Bookings could not be loaded");
  }

  return { data, error };
}
