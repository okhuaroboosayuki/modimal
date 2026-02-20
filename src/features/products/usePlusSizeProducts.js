import { useInfiniteQuery } from "@tanstack/react-query";
import useUrlParams from "../../hooks/useUrlParams";
import { getProductsByPlusSize } from "../../services/apiProducts";
import { PAGE_SIZE } from "../../utils/contants";

export function usePlusSizeProducts() {
  const { filters, sortBy } = useUrlParams();

  const {
    data,
    isPending: isPlusSizeProductLoading,
    hasNextPage,
    fetchNextPage,
    isFetchingNextPage,
  } = useInfiniteQuery({
    queryKey: ["plusSize-products", sortBy, filters],
    queryFn: ({ pageParam = 0 }) =>
      getProductsByPlusSize({
        sortBy,
        filters,
        page: pageParam,
        pageSize: PAGE_SIZE,
      }),

    getNextPageParam: (lastPage, allPages) => {
      const fetchedCount = allPages.length * PAGE_SIZE;
      return fetchedCount < lastPage.count ? allPages.length : undefined;
    },
  });

  const plusSizeProducts = data?.pages.flatMap((page) => page.data ?? []) ?? [];

  return {
    plusSizeProducts,
    isPlusSizeProductLoading,
    hasNextPage,
    fetchNextPage,
    isFetchingNextPage,
  };
}
