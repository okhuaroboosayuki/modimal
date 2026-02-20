import { useInfiniteQuery } from "@tanstack/react-query";
import { getProducts } from "../../services/apiProducts";
import useUrlParams from "../../hooks/useUrlParams";
import { PAGE_SIZE } from "../../utils/contants";

export function useProducts() {
  const { filters, sortBy } = useUrlParams();

  const {
    data,
    isPending: isAllProductLoading,
    hasNextPage,
    fetchNextPage,
    isFetchingNextPage,
  } = useInfiniteQuery({
    queryKey: ["all-products", sortBy, filters],
    queryFn: ({ pageParam = 0 }) =>
      getProducts({ filters, sortBy, page: pageParam, pageSize: PAGE_SIZE }),

    getNextPageParam: (lastPage, allPages) => {
      const fetchedCount = allPages.length * PAGE_SIZE;
      return fetchedCount < lastPage.count ? allPages.length : undefined;
    },
  });

  const allProducts = data?.pages.flatMap((page) => page.data ?? []) ?? [];

  return {
    allProducts,
    isAllProductLoading,
    hasNextPage,
    fetchNextPage,
    isFetchingNextPage,
  };
}
