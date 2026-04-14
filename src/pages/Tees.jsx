import SEO from "../components/SEO";
import ProductsPageContent from "../features/products/ProductsPageContent";
import { useProductsByCategory } from "../features/products/useProductsByCategory";

function Tees() {
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
        title={"Tees"}
        description="Discover our trendy collection of t-shirts at Modimal, designed to keep you stylish and comfortable all season long."
        url={"tees"}
      />

      <ProductsPageContent
        key={"tees"}
        data={productsByCategory}
        isLoading={isProductCatLoading}
        hasNextPage={hasNextPage}
        isFetchingNextPage={isFetchingNextPage}
        fetchNextPage={fetchNextPage}
      />
    </>
  );
}

export default Tees;
