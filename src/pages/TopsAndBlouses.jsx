import SEO from "../components/SEO";
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
    <>
      <SEO
        title={"Tops & Blouses"}
        description="Discover our stylish collection of tops and blouses at Modimal, designed to elevate your everyday look with comfort and flair."
        url={"tops-&-blouses"}
      />

      <ProductsPageContent
        key={"tops and blouses"}
        data={productsByCategory}
        isLoading={isProductCatLoading}
        hasNextPage={hasNextPage}
        isFetchingNextPage={isFetchingNextPage}
        fetchNextPage={fetchNextPage}
      />
    </>
  );
}

export default TopsAndBlouses;
