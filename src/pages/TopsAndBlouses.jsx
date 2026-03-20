import ProductsPageContent from "../features/products/ProductsPageContent";
import { useProductsByCategory } from "../features/products/useProductsByCategory";

function TopsAndBlouses() {
  const {
    isProductCatLoading,
    productsByCategory,
    hasNextPage,
    isFetchingNextPage,
    fetchNextPage,
  } = useProductsByCategory();

  return (
    <ProductsPageContent
      key={"tops and blouses"}
      data={productsByCategory}
      isLoading={isProductCatLoading}
      hasNextPage={hasNextPage}
      isFetchingNextPage={isFetchingNextPage}
      fetchNextPage={fetchNextPage}
    />
  );
}

export default TopsAndBlouses;
