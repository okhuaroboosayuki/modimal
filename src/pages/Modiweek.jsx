import SEO from "../components/SEO";
import ModiweekPageContent from "../features/products/ModiweekPageContent";
import { useModiweekProductByDay } from "../features/products/useModiweekProductByDay";

function Modiweek() {
  const { modiweekDayProduct, isLoading } = useModiweekProductByDay();

  return (
    <>
      <SEO
        title={"Modiweek"}
        description="Discover the latest daily trends specific for each day of the week at Modimal. Explore our curated collection of stylish outfits and accessories tailored to make every day a fashion statement."
        url={"modiweek"}
      />

      <ModiweekPageContent product={modiweekDayProduct} isLoading={isLoading} />
    </>
  );
}

export default Modiweek;
