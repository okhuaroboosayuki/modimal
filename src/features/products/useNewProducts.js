import { useInfiniteQuery } from "@tanstack/react-query";
import useUrlParams from "../../hooks/useUrlParams";
import { getNewProducts } from "../../services/apiProducts";
import { PAGE_SIZE } from "../../utils/contants";

export function useNewProducts() {
  const { filters, sortBy } = useUrlParams();

  const {
    data,
    isPending: isNewProductLoading,
    hasNextPage,
    fetchNextPage,
    isFetchingNextPage,
  } = useInfiniteQuery({
    queryKey: ["newProducts", sortBy, filters],
    queryFn: ({ pageParam = 0 }) =>
      getNewProducts({ filters, sortBy, page: pageParam, pageSize: PAGE_SIZE }),

    getNextPageParam: (lastPage, allPages) => {
      const fetchedCount = allPages.length * PAGE_SIZE;
      return fetchedCount < lastPage.count ? allPages.length : undefined;
    },
  });

  const newProducts = data?.pages.flatMap((page) => page.data ?? []) ?? [];

  return {
    newProducts,
    isNewProductLoading,
    hasNextPage,
    fetchNextPage,
    isFetchingNextPage,
  };
}
