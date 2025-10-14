import ProductsPageContent from "../features/products/ProductsPageContent";
import { useProductsByCategory } from "../features/products/useProductsByCategory";

function Tees() {
  const { isProductCatLoading, data } = useProductsByCategory();

  return <ProductsPageContent data={data} loader={isProductCatLoading} />;
}

export default Tees;
