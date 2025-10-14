import ProductsPageContent from "../features/products/ProductsPageContent";
import { useProducts } from "./../features/products/useProducts";

function AllProducts() {
  const { isAllProductLoading, data } = useProducts();

  return <ProductsPageContent data={data} loader={isAllProductLoading} />;
}

export default AllProducts;
