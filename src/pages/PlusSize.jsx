import SEO from "../components/SEO";
import ProductsPageContent from "../features/products/ProductsPageContent";
import { usePlusSizeProducts } from "../features/products/usePlusSizeProducts";
import PlusSizeHero from "../assets/images/plus_size_hero.png";
import PlusSizeHeroSrcSet from "../assets/images/plus_size_hero.png?w=640;768;1024;1440;1920&format=webp&as=srcset";
import PlusSizeHeroBlur from "../assets/images/plus_size_hero.png?w=20&blur=2&format=webp&as=base64";

const PLUS_SIZE_IMAGE = "plus_size_hero.png";

function PlusSize() {
  const {
    isPlusSizeProductLoading,
    plusSizeProducts,
    hasNextPage,
    isFetchingNextPage,
    fetchNextPage,
  } = usePlusSizeProducts();

  const imageObject = {
    src: PlusSizeHero,
    srcSet: PlusSizeHeroSrcSet,
    blur: PlusSizeHeroBlur,
  };

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
        imgObj={imageObject}
        hasNextPage={hasNextPage}
        isFetchingNextPage={isFetchingNextPage}
        fetchNextPage={fetchNextPage}
      />
    </>
  );
}

export default PlusSize;
