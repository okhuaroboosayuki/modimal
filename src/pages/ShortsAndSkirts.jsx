import ProductsPageContent from "../features/products/ProductsPageContent";
import { useProductsByCategory } from "../features/products/useProductsByCategory";

function ShortsAndSkirts() {
  const {
    isProductCatLoading,
    productsByCategory,
    hasNextPage,
    isFetchingNextPage,
    fetchNextPage,
  } = useProductsByCategory();

  return (
    <ProductsPageContent
      key={"shorts & skirts"}
      data={productsByCategory}
      isLoading={isProductCatLoading}
      hasNextPage={hasNextPage}
      isFetchingNextPage={isFetchingNextPage}
      fetchNextPage={fetchNextPage}
    />
  );
}

export default ShortsAndSkirts;
