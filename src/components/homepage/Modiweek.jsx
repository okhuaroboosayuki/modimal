import { useMemo } from "react";
import { useModiweekProducts } from "../../features/products/useModiweekProducts";
import { ProgressLink } from "../ProgressLinks";
import { ModiweekCardSkeleton } from "../Loaders";

function ModiweekCard({ id, productName, imageUrl, dayOfTheWeek }) {
  return (
    <article className="modiweek-card flex flex-col gap-9.5">
      <img
        src={imageUrl}
        alt={`${productName} product image`}
        loading="lazy"
        className="h-[300px] w-full object-cover object-center md:h-[426px]"
        draggable="false"
      />

      <ProgressLink to={`/modiweek/${id}`} className="w-fit font-semibold">
        {dayOfTheWeek}
      </ProgressLink>
    </article>
  );
}

function Modiweek() {
  const { productsByModiweek, isModiweekProductLoading } =
    useModiweekProducts();

  const uniqueModiweekProducts = useMemo(() => {
    const seen = new Set();

    return productsByModiweek?.filter((product) => {
      if (seen.has(product.modiweek)) return false;

      seen.add(product.modiweek);
      return true;
    });
  }, [productsByModiweek]);

  return (
    <div className="flex flex-col justify-center gap-6 capitalize">
      <h1 className="text-2xl font-semibold md:text-[32px]">modiweek</h1>

      <div className="modiweek-carousel">
        {isModiweekProductLoading
          ? Array.from({ length: 7 }).map((_, i) => (
              <ModiweekCardSkeleton key={i} />
            ))
          : uniqueModiweekProducts?.map((product) => (
              <ModiweekCard
                key={product.id}
                id={product.id}
                productName={product.productName}
                imageUrl={product.productImages[0]?.url}
                dayOfTheWeek={product.modiweek}
              />
            ))}
      </div>
    </div>
  );
}

export default Modiweek;
