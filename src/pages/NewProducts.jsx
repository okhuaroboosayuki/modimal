import SEO from "../components/SEO";
import ProductsPageContent from "../features/products/ProductsPageContent";
import { useNewProducts } from "../features/products/useNewProducts";

function NewProducts() {
  const {
    isNewProductLoading,
    newProducts,
    hasNextPage,
    isFetchingNextPage,
    fetchNextPage,
  } = useNewProducts();

  return (
    <>
      <SEO
        title={"New Products"}
        description="Discover the latest additions to Modimal's collection, featuring trendy and stylish pieces that are perfect for updating your wardrobe."
        url={"new-in"}
      />

      <ProductsPageContent
        key={"new products"}
        data={newProducts}
        isLoading={isNewProductLoading}
        hasNextPage={hasNextPage}
        isFetchingNextPage={isFetchingNextPage}
        fetchNextPage={fetchNextPage}
      />
    </>
  );
}

export default NewProducts;
