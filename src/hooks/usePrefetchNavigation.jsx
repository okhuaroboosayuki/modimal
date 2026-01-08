import { useQueryClient } from "@tanstack/react-query";
import {
  getProducts,
  getProductsByCategory,
  getNewProducts,
  getProductsByBestSeller,
  getProductsByModiweek,
  getProductsByPlusSize,
} from "../services/apiProducts";

export function usePrefetchNavigation() {
  const queryClient = useQueryClient();

  const prefetchProducts = (path) => {
    const pathToCategory = {
      "shop-all": () =>
        queryClient.prefetchQuery({
          queryKey: ["all-products", null, {}],
          queryFn: () => getProducts({ filters: {}, sortBy: null }),
        }),
      "tops-&-blouses": () =>
        queryClient.prefetchQuery({
          queryKey: ["tops & blouses", null, {}],
          queryFn: () =>
            getProductsByCategory("tops & blouses", {
              sortBy: null,
              filters: {},
            }),
        }),
      pants: () =>
        queryClient.prefetchQuery({
          queryKey: ["pants", null, {}],
          queryFn: () =>
            getProductsByCategory("pants", { sortBy: null, filters: {} }),
        }),
      "dresses-&-jumpsuits": () =>
        queryClient.prefetchQuery({
          queryKey: ["dresses & jumpsuits", null, {}],
          queryFn: () =>
            getProductsByCategory("dresses & jumpsuits", {
              sortBy: null,
              filters: {},
            }),
        }),
      "outwear-&-jackets": () =>
        queryClient.prefetchQuery({
          queryKey: ["outwear & jackets", null, {}],
          queryFn: () =>
            getProductsByCategory("outwear & jackets", {
              sortBy: null,
              filters: {},
            }),
        }),
      pullovers: () =>
        queryClient.prefetchQuery({
          queryKey: ["pullovers", null, {}],
          queryFn: () =>
            getProductsByCategory("pullovers", { sortBy: null, filters: {} }),
        }),
      tees: () =>
        queryClient.prefetchQuery({
          queryKey: ["tees", null, {}],
          queryFn: () =>
            getProductsByCategory("tees", { sortBy: null, filters: {} }),
        }),
      "shorts-&-skirts": () =>
        queryClient.prefetchQuery({
          queryKey: ["shorts & skirts", null, {}],
          queryFn: () =>
            getProductsByCategory("shorts & skirts", {
              sortBy: null,
              filters: {},
            }),
        }),
      "new-in": () =>
        queryClient.prefetchQuery({
          queryKey: ["new products", null, {}],
          queryFn: () => getNewProducts({ sortBy: null, filters: {} }),
        }),
      modiweek: () =>
        queryClient.prefetchQuery({
          queryKey: ["modiweek products", null, {}],
          queryFn: () => getProductsByModiweek({ sortBy: null, filters: {} }),
        }),
      "plus-size": () =>
        queryClient.prefetchQuery({
          queryKey: ["plus size products", null, {}],
          queryFn: () => getProductsByPlusSize({ sortBy: null, filters: {} }),
        }),
      "best-seller": () =>
        queryClient.prefetchQuery({
          queryKey: ["best seller products", null, {}],
          queryFn: () => getProductsByBestSeller({ sortBy: null, filters: {} }),
        }),
    };

    if (pathToCategory[path]) {
      pathToCategory[path]();
    }
  };

  return { prefetchProducts };
}
