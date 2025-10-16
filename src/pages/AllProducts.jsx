import ProductsPageContent from "../features/products/ProductsPageContent";
import { useProducts } from "./../features/products/useProducts";
import shopAllImage from "/images/frame-427319608.png";

function AllProducts() {
  const { isAllProductLoading, data } = useProducts();

  return (
    <ProductsPageContent
      data={data}
      loader={isAllProductLoading}
      heroImage={shopAllImage}
    />
  );
}

export default AllProducts;
