import ProductsPageContent from "../features/products/ProductsPageContent";
import { useBestSellingProducts } from "../features/products/useBestSellingProducts";

function BestSeller() {
  const {
    isBestSellerProductLoading,
    bestSellingProducts,
    hasNextPage,
    isFetchingNextPage,
    fetchNextPage,
  } = useBestSellingProducts();

  return (
    <ProductsPageContent
      data={bestSellingProducts}
      isLoading={isBestSellerProductLoading}
      hasNextPage={hasNextPage}
      isFetchingNextPage={isFetchingNextPage}
      fetchNextPage={fetchNextPage}
    />
  );
}

export default BestSeller;
