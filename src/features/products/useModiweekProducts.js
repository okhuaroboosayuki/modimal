import { useInfiniteQuery } from "@tanstack/react-query";
import { parse } from "date-fns";
import { getProductsByModiweek } from "../../services/apiProducts";
import { PAGE_SIZE } from "../../utils/contants";
import useUrlParams from "../../hooks/useUrlParams";

export function useModiweekProducts() {
  const { filters, sortBy } = useUrlParams();

  const {
    data,
    isPending: isModiweekProductLoading,
    hasNextPage,
    fetchNextPage,
    isFetchingNextPage,
  } = useInfiniteQuery({
    queryKey: ["productsByModiweek", sortBy, filters],
    queryFn: ({ pageParam = 0 }) =>
      getProductsByModiweek({
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

  const productsByModiweek =
    data?.pages
      .flatMap((page) => page.data ?? [])
      .sort((a, b) => {
        const dayA = parse(a.modiweek, "EEEE", new Date()).getDay();
        const dayB = parse(b.modiweek, "EEEE", new Date()).getDay();

        return dayA - dayB;
      }) ?? [];

  return {
    productsByModiweek,
    isModiweekProductLoading,
    hasNextPage,
    fetchNextPage,
    isFetchingNextPage,
  };
}
