import Product from "../components/products/Product";
import { useProduct } from "../features/products/useProduct";

function SingleProduct() {
  const { data, isProductLoading } = useProduct();

  return <Product data={data} loader={isProductLoading} />;
}

export default SingleProduct;
