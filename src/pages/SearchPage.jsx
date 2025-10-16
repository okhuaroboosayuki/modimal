import ProductsPageContent from "../features/products/ProductsPageContent";
import { useSearchProducts } from "../features/products/useSearchProducts";

function SearchPage() {
  const { data, isSearching } = useSearchProducts();

  const totalItems = data?.data.length || 0;

  return (
    <ProductsPageContent
      data={data}
      loader={isSearching}
      totalItems={totalItems}
    />
  );
}

export default SearchPage;
