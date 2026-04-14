import SEO from "../components/SEO";
import ProductsPageContent from "../features/products/ProductsPageContent";
import { useProductsByCategory } from "../features/products/useProductsByCategory";

function DressesAndJumpsuits() {
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
        title={"Dresses & Jumpsuits"}
        description="Explore our stunning collection of dresses and jumpsuits at Modimal, designed to elevate your style for any occasion."
        url={"dresses-&-jumpsuits"}
      />

      <ProductsPageContent
        key={"dresses & jumpsuits"}
        data={productsByCategory}
        isLoading={isProductCatLoading}
        hasNextPage={hasNextPage}
        isFetchingNextPage={isFetchingNextPage}
        fetchNextPage={fetchNextPage}
      />
    </>
  );
}

export default DressesAndJumpsuits;
