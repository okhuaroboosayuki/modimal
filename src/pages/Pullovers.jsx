import SEO from "../components/SEO";
import ProductsPageContent from "../features/products/ProductsPageContent";
import { useProductsByCategory } from "../features/products/useProductsByCategory";

function Pullovers() {
  const {
    isProductCatLoading,
    productsByCategory,
    hasNextPage,
    isFetchingNextPage,
    fetchNextPage,
  } = useProductsByCategory();

  return (
    <>
      <SEO
        title={"Pullovers"}
        description="Discover our cozy and stylish collection of pullovers at Modimal, designed to keep you warm and fashionable in any season."
        url={"pullovers"}
      />

      <ProductsPageContent
        key={"pullovers"}
        data={productsByCategory}
        isLoading={isProductCatLoading}
        hasNextPage={hasNextPage}
        isFetchingNextPage={isFetchingNextPage}
        fetchNextPage={fetchNextPage}
      />
    </>
  );
}

export default Pullovers;
