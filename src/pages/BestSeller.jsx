import ProductsPageContent from "../features/products/ProductsPageContent";
import { useBestSellingProducts } from "../features/products/useBestSellingProducts";

function BestSeller() {
  const { isBestSellerProductLoading, data } = useBestSellingProducts();

  return (
    <ProductsPageContent data={data} loader={isBestSellerProductLoading} />
  );
}

export default BestSeller;
