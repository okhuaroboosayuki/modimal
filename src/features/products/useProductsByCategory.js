import { useLocation } from "react-router-dom";
import { useInfiniteQuery } from "@tanstack/react-query";
import useUrlParams from "../../hooks/useUrlParams";
import { getProductsByCategory } from "../../services/apiProducts";
import { PAGE_SIZE } from "../../utils/contants";

export function useProductsByCategory() {
  const location = useLocation();
  const { filters, sortBy } = useUrlParams();

  const slicedPathName = location.pathname.slice(1);
  const categoryName = slicedPathName.split("-").join(" ");

  const {
    data,
    isPending: isProductCatLoading,
    hasNextPage,
    fetchNextPage,
    isFetchingNextPage,
  } = useInfiniteQuery({
    queryKey: [categoryName, sortBy, filters],
    queryFn: ({ pageParam = 0 }) =>
      getProductsByCategory(categoryName, {
        filters,
        sortBy,
        page: pageParam,
        pageSize: PAGE_SIZE,
      }),

    getNextPageParam: (lastPage, allPages) => {
      const fetchedCount = allPages.length * PAGE_SIZE;
      return fetchedCount < lastPage.count ? allPages.length : undefined;
    },
  });

  const productsByCategory =
    data?.pages.flatMap((page) => page.data ?? []) ?? [];

  return {
    productsByCategory,
    isProductCatLoading,
    hasNextPage,
    fetchNextPage,
    isFetchingNextPage,
  };
}
