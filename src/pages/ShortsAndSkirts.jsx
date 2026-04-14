import SEO from "../components/SEO";
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
    <>
      <SEO
        title={"Shorts & Skirt"}
        description="Discover our trendy collection of shorts and skirts at Modimal, designed to keep you stylish and comfortable all season long."
        url={"shorts-&-skirts"}
      />

      <ProductsPageContent
        key={"shorts & skirts"}
        data={productsByCategory}
        isLoading={isProductCatLoading}
        hasNextPage={hasNextPage}
        isFetchingNextPage={isFetchingNextPage}
        fetchNextPage={fetchNextPage}
      />
    </>
  );
}

export default ShortsAndSkirts;
