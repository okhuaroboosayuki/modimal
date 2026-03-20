import ProductsPageContent from "../features/products/ProductsPageContent";
import { usePlusSizeProducts } from "../features/products/usePlusSizeProducts";
import PlusSizeHero from "/images/plus_size_hero.png";

function PlusSize() {
  const {
    isPlusSizeProductLoading,
    plusSizeProducts,
    hasNextPage,
    isFetchingNextPage,
    fetchNextPage,
  } = usePlusSizeProducts();

  return (
    <ProductsPageContent
      key={"plus size"}
      data={plusSizeProducts}
      isLoading={isPlusSizeProductLoading}
      heroImage={PlusSizeHero}
      hasNextPage={hasNextPage}
      isFetchingNextPage={isFetchingNextPage}
      fetchNextPage={fetchNextPage}
    />
  );
}

export default PlusSize;
