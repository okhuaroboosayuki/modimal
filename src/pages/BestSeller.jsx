import SEO from "../components/SEO";
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
    <>
      <SEO
        title={"Best Sellers"}
        description="Discover Modimal's best-selling products, loved by our customers for their style and quality."
        url={"best-seller"}
      />

      <ProductsPageContent
        key={"best seller"}
        data={bestSellingProducts}
        isLoading={isBestSellerProductLoading}
        hasNextPage={hasNextPage}
        isFetchingNextPage={isFetchingNextPage}
        fetchNextPage={fetchNextPage}
      />
    </>
  );
}

export default BestSeller;
