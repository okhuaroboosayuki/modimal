import ProductsPageContent from "../features/products/ProductsPageContent";
import { useModiweekProducts } from "../features/products/useModiweekProducts";

function Modiweek() {
  const { isModiweekProductLoading, data } = useModiweekProducts();

  return <ProductsPageContent data={data} loader={isModiweekProductLoading} />;
}

export default Modiweek;
