import { useInfiniteQuery } from "@tanstack/react-query";
import { getProducts } from "../../services/apiProducts";
import useUrlParams from "../../hooks/useUrlParams";
import { PAGE_SIZE } from "../../utils/contants";

export function useSearchProducts() {
  const { searchValue, filters, sortBy } = useUrlParams();

  const {
    data,
    isPending: isSearching,
    hasNextPage,
    fetchNextPage,
    isFetchingNextPage,
  } = useInfiniteQuery({
    queryKey: ["searchedProducts", searchValue, sortBy, filters],
    queryFn: ({ pageParam = 0 }) =>
      getProducts({
        searchValue,
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

  const searchedProducts = data?.pages.flatMap((page) => page.data ?? []) ?? [];
  const totalCount = data?.pages[0]?.count ?? 0;

  return {
    searchedProducts,
    totalCount,
    isSearching,
    hasNextPage,
    fetchNextPage,
    isFetchingNextPage,
  };
}
