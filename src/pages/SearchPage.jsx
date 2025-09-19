import { useSearchProducts } from "../features/products/useSearchProducts";
import ProductsListContainer from "../components/products/ProductsListContainer";

function SearchPage() {
  const { data, isSearching } = useSearchProducts();

  const products = data?.data || [];
  const totalItems = products.length || 0;

  if (isSearching) return <div>Searching...</div>;

  if (!products || products.length === 0) {
    return <p>No products available.</p>;
  }

  return (
    <section className="flex w-full flex-col items-center justify-center gap-10 px-[108px] py-12">
      <div>search input</div>

      <div className="flex w-full flex-col items-center justify-center gap-8 capitalize">
        <p className="text-[20px]">{totalItems} items</p>

        <ProductsListContainer products={products} />
      </div>
    </section>
  );
}

export default SearchPage;
