import ProductsPageContent from "../features/products/ProductsPageContent";
import { usePlusSizeProducts } from "../features/products/usePlusSizeProducts";
import PlusSizeHero from "/images/plus_size_hero.png";

function PlusSize() {
  const { isPlusSizeProductLoading, data } = usePlusSizeProducts();

  return (
    <ProductsPageContent
      data={data}
      loader={isPlusSizeProductLoading}
      heroImage={PlusSizeHero}
    />
  );
}

export default PlusSize;
