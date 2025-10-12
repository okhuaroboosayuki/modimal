export function applySort(query, sortBy) {
  if (!sortBy) return query;

  switch (sortBy) {
    case "featured":
      return query.order("modiweek", { ascending: true });
    case "bestseller":
      return query.order("totalSold", { ascending: false });
    case "price-asc":
      return query.order("price", { ascending: true });
    case "price-desc":
      return query.order("price", { ascending: false });
    default:
      return query;
  }
}

export function applyFilters(query, filters = {}) {
  if (!filters) return query;

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

  // fabric filter
  if (filters.fabric && filters.fabric.length > 0) {
    if (filters.fabric.length === 1) {
      query = query.or(`fabricDetails.cs.{"type": "${filters.fabric[0]}"}`);
    }
    if (filters.fabric.length > 1) {
      filters.fabric.forEach((fabric) => {
        query = query.or(`fabricDetails.cs.{"type": "${fabric}"}`);
      });
    }
  }

  return query;
}
