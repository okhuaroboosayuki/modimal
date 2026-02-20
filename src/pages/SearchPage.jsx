import ProductsPageContent from "../features/products/ProductsPageContent";
import { useSearchProducts } from "../features/products/useSearchProducts";

function SearchPage() {
  const {
    searchedProducts,
    totalCount,
    isSearching,
    hasNextPage,
    isFetchingNextPage,
    fetchNextPage,
  } = useSearchProducts();

  return (
    <ProductsPageContent
      data={searchedProducts}
      totalCount={totalCount}
      isLoading={isSearching}
      hasNextPage={hasNextPage}
      isFetchingNextPage={isFetchingNextPage}
      fetchNextPage={fetchNextPage}
    />
  );
}

export default SearchPage;
