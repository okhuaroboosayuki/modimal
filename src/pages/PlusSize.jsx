import SEO from "../components/SEO";
import ProductsPageContent from "../features/products/ProductsPageContent";
import { usePlusSizeProducts } from "../features/products/usePlusSizeProducts";
import PlusSizeHero from "/images/plus_size_hero.png";

const PLUS_SIZE_IMAGE = "plus_size_hero.png";

function PlusSize() {
  const {
    isPlusSizeProductLoading,
    plusSizeProducts,
    hasNextPage,
    isFetchingNextPage,
    fetchNextPage,
  } = usePlusSizeProducts();

  return (
    <>
      <SEO
        title={"Plus Size Clothing"}
        description="Discover our stylish collection of plus size clothing at Modimal, designed to celebrate your curves and elevate your fashion game."
        url={"plus-size"}
        image={PLUS_SIZE_IMAGE}
      />

      <ProductsPageContent
        key={"plus size"}
        data={plusSizeProducts}
        isLoading={isPlusSizeProductLoading}
        heroImage={PlusSizeHero}
        hasNextPage={hasNextPage}
        isFetchingNextPage={isFetchingNextPage}
        fetchNextPage={fetchNextPage}
      />
    </>
  );
}

export default PlusSize;
