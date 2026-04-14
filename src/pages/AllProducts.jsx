import SEO from "../components/SEO";
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
    <>
      <SEO
        title={"Shop All Products"}
        description="Browse our full collection of women's clothing at Modimal."
        url={"shop-all"}
      />

      <ProductsPageContent
        key={"all products"}
        data={allProducts}
        isLoading={isAllProductLoading}
        heroImage={shopAllImage}
        hasNextPage={hasNextPage}
        isFetchingNextPage={isFetchingNextPage}
        fetchNextPage={fetchNextPage}
      />
    </>
  );
}

export default AllProducts;
