import ProductsPageContent from "../features/products/ProductsPageContent";
import { useNewProducts } from "../features/products/useNewProducts";

function NewProducts() {
  const {
    isNewProductLoading,
    newProducts,
    hasNextPage,
    isFetchingNextPage,
    fetchNextPage,
  } = useNewProducts();

  return (
    <ProductsPageContent
      key={"new products"}
      data={newProducts}
      isLoading={isNewProductLoading}
      hasNextPage={hasNextPage}
      isFetchingNextPage={isFetchingNextPage}
      fetchNextPage={fetchNextPage}
    />
  );
}

export default NewProducts;
