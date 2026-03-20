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
    <ProductsPageContent
      key={"modiweek"}
      data={productsByModiweek}
      isLoading={isModiweekProductLoading}
      hasNextPage={hasNextPage}
      isFetchingNextPage={isFetchingNextPage}
      fetchNextPage={fetchNextPage}
    />
  );
}

export default Modiweek;
