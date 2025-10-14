import ProductsPageContent from "../features/products/ProductsPageContent";
import { useNewProducts } from "../features/products/useNewProducts";

function NewProducts() {
  const { isNewProductLoading, data } = useNewProducts();

  return <ProductsPageContent data={data} loader={isNewProductLoading} />;
}

export default NewProducts;
