import ProductsPageContent from "../features/products/ProductsPageContent";
import { useProductsByCategory } from "../features/products/useProductsByCategory";

function Pants() {
  const {
    isProductCatLoading,
    productsByCategory,
    hasNextPage,
    isFetchingNextPage,
    fetchNextPage,
  } = useProductsByCategory();

  return (
    <ProductsPageContent
      key={"pants"}
      data={productsByCategory}
      isLoading={isProductCatLoading}
      hasNextPage={hasNextPage}
      isFetchingNextPage={isFetchingNextPage}
      fetchNextPage={fetchNextPage}
    />
  );
}

export default Pants;
