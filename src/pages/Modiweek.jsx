import SEO from "../components/SEO";
import ProductsPageContent from "../features/products/ProductsPageContent";
import { useModiweekProducts } from "../features/products/useModiweekProducts";

function Modiweek() {
  const {
    isModiweekProductLoading,
    productsByModiweek,
    hasNextPage,
    isFetchingNextPage,
    fetchNextPage,
  } = useModiweekProducts();

  return (
    <>
      <SEO
        title={"Modiweek"}
        description="Discover the latest daily trends specific for each day of the week at Modimal. Explore our curated collection of stylish outfits and accessories tailored to make every day a fashion statement."
        url={"modiweek"}
      />

      <ProductsPageContent
        key={"modiweek"}
        data={productsByModiweek}
        isLoading={isModiweekProductLoading}
        hasNextPage={hasNextPage}
        isFetchingNextPage={isFetchingNextPage}
        fetchNextPage={fetchNextPage}
      />
    </>
  );
}

export default Modiweek;
