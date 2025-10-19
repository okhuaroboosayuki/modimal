import ProductsPageContent from "../features/products/ProductsPageContent";
import { usePlusSizeProducts } from "../features/products/usePlusSizeProducts";

function PlusSize() {
  const { isPlusSizeProductLoading, data } = usePlusSizeProducts();

  return <ProductsPageContent data={data} loader={isPlusSizeProductLoading} />;
}

export default PlusSize;
