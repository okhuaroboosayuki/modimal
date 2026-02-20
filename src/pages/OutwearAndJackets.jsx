import ProductsPageContent from "../features/products/ProductsPageContent";
import { useProductsByCategory } from "../features/products/useProductsByCategory";

function OutwearAndJackets() {
  const {
    isProductCatLoading,
    productsByCategory,
    hasNextPage,
    isFetchingNextPage,
    fetchNextPage,
  } = useProductsByCategory();

  return (
    <ProductsPageContent
      data={productsByCategory}
      isLoading={isProductCatLoading}
      hasNextPage={hasNextPage}
      isFetchingNextPage={isFetchingNextPage}
      fetchNextPage={fetchNextPage}
    />
  );
}

export default OutwearAndJackets;
