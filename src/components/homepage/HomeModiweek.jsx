import { useModiweekProducts } from "../../features/products/useModiweekProducts";
import { ProgressLink } from "../ProgressLinks";
import { ModiweekCardSkeleton } from "../Loaders";
import { parse } from "date-fns";

function ModiweekCard({ imageUrl, dayOfTheWeek }) {
  return (
    <article className="modiweek-card flex flex-col gap-9.5">
      <ProgressLink to={`/modiweek/${dayOfTheWeek}`} className="w-full">
        <img
          src={imageUrl}
          alt={`${dayOfTheWeek} product image`}
          loading="lazy"
          className="h-[300px] w-full object-cover object-center md:h-[426px]"
          draggable="false"
        />
      </ProgressLink>

      <ProgressLink
        to={`/modiweek/${dayOfTheWeek}`}
        className="w-fit font-semibold"
      >
        {dayOfTheWeek}
      </ProgressLink>
    </article>
  );
}

function HomeModiweek({ modiweekDayOnPage, modiweekDayOnPageLoading }) {
  const { productsByModiweek, isModiweekProductLoading } =
    useModiweekProducts();

  const modiweekProducts = !modiweekDayOnPage
    ? productsByModiweek?.filter((product) => product.is_published === true)
    : productsByModiweek?.filter(
        (product) =>
          product.is_published === true &&
          product.day_of_week !== modiweekDayOnPage,
      );

  const sortedModiweekProducts = modiweekProducts?.sort((a, b) => {
    const dayA = parse(a.day_of_week, "EEEE", new Date()).getDay();
    const dayB = parse(b.day_of_week, "EEEE", new Date()).getDay();
    return dayA - dayB;
  });

  return (
    <div className="flex flex-col justify-center gap-6 capitalize">
      {!modiweekDayOnPageLoading ||
        (!modiweekDayOnPage && (
          <h1 className="text-2xl font-semibold md:text-[32px]">modiweek</h1>
        ))}

      <div className="modiweek-carousel">
        {isModiweekProductLoading || modiweekDayOnPageLoading
          ? Array.from({ length: 7 }).map((_, i) => (
              <ModiweekCardSkeleton key={i} />
            ))
          : sortedModiweekProducts?.map((product) => (
              <ModiweekCard
                key={product.id}
                id={product.id}
                imageUrl={product.main_image}
                dayOfTheWeek={product.day_of_week}
              />
            ))}
      </div>
    </div>
  );
}

export default HomeModiweek;
