import Skeleton from "react-loading-skeleton";
import BreadCrumbs from "../../components/BreadCrumbs";
import HomeModiweek from "../../components/homepage/HomeModiweek";
import { ModiweekLookSkeleton } from "../../components/Loaders";
import ModiweekLookDetails from "./ModiweekLookDetails";

function ModiweekPageContent({ product, isLoading }) {
  return (
    <section className="flex w-full flex-col items-start gap-8.5 px-5 pt-11 pb-12 sm:gap-10 md:px-14 lg:px-20 xl:px-27">
      <div className="self-start" id="breadcrumb_wrapper">
        <BreadCrumbs pageName={"modiweek"} />
      </div>

      <section className="flex w-full flex-col gap-12 md:gap-10">
        {isLoading ? (
          <Skeleton width={160} height={32} />
        ) : (
          <h3 className="text-2xl font-semibold capitalize sm:text-[32px]">
            {product?.day_of_week}
          </h3>
        )}

        {isLoading ? (
          <ModiweekLookSkeleton />
        ) : (
          <ModiweekLookDetails
            imageSrc={product.main_image}
            dayOTheWeek={product.day_of_week}
            productsAttachedToLook={product.products}
          />
        )}

        <HomeModiweek modiweekDayOnPage={product?.day_of_week} />
      </section>
    </section>
  );
}

export default ModiweekPageContent;
