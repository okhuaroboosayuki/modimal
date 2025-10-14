import ProductsPageContent from "../features/products/ProductsPageContent";
import { useSearchProducts } from "../features/products/useSearchProducts";

function SearchPage() {
  const { data, isSearching } = useSearchProducts();

  return <ProductsPageContent data={data} loader={isSearching} />;
}

export default SearchPage;
