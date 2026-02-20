import { useInfiniteQuery } from "@tanstack/react-query";
import useUrlParams from "../../hooks/useUrlParams";
import { getProductsByBestSeller } from "../../services/apiProducts";
import { PAGE_SIZE } from "../../utils/contants";

export function useBestSellingProducts() {
  const { filters, sortBy } = useUrlParams();

  const {
    data,
    isPending: isBestSellerProductLoading,
    hasNextPage,
    fetchNextPage,
    isFetchingNextPage,
  } = useInfiniteQuery({
    queryKey: ["best-sellers", sortBy, filters],
    queryFn: ({ pageParam = 0 }) =>
      getProductsByBestSeller({
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

  const bestSellingProducts =
    data?.pages.flatMap((page) => page.data ?? []) ?? [];

  return {
    bestSellingProducts,
    isBestSellerProductLoading,
    hasNextPage,
    fetchNextPage,
    isFetchingNextPage,
  };
}
