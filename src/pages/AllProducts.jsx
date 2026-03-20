import ProductsPageContent from "../features/products/ProductsPageContent";
import { useProducts } from "./../features/products/useProducts";
import shopAllImage from "/images/frame-427319608.png";

function AllProducts() {
  const {
    isAllProductLoading,
    allProducts,
    hasNextPage,
    isFetchingNextPage,
    fetchNextPage,
  } = useProducts();

  return (
    <ProductsPageContent
      key={"all products"}
      data={allProducts}
      isLoading={isAllProductLoading}
      heroImage={shopAllImage}
      hasNextPage={hasNextPage}
      isFetchingNextPage={isFetchingNextPage}
      fetchNextPage={fetchNextPage}
    />
  );
}

export default AllProducts;
