import SEO from "../components/SEO";
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
    <>
      <SEO
        title={"Outwear & Jackets"}
        description="Discover our stylish collection of outerwear and jackets at Modimal, designed to keep you warm and fashionable in any season."
        url={"outwear-&-jackets"}
      />

      <ProductsPageContent
        key={"outwear"}
        data={productsByCategory}
        isLoading={isProductCatLoading}
        hasNextPage={hasNextPage}
        isFetchingNextPage={isFetchingNextPage}
        fetchNextPage={fetchNextPage}
      />
    </>
  );
}

export default OutwearAndJackets;
