import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import NProgress from "nprogress";
import "nprogress/nprogress.css";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

export function LoadingSpinner() {
  return (
    <div className="flex w-full items-center justify-center">
      <div className="lds-ring">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
}

export function PageLoader() {
  const brandName = "modimal".split("");

  return (
    <div className="flex h-screen w-full items-center justify-center">
      {brandName.map((char, index) => (
        <span
          key={index}
          className="text-primary animate-wave inline-block text-3xl font-bold"
          style={{ animationDelay: `${index * 0.1}s` }}
        >
          {char}
        </span>
      ))}
    </div>
  );
}

export function SmallLoader() {
  return (
    <div className="flex h-full w-full items-center justify-center">
      <div className="small-loader">
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
}

export function ProductCardSkeleton() {
  return (
    <div className="flex h-fit w-full flex-col items-start gap-4">
      <div className="aspect-[392/438] w-full overflow-hidden">
        <Skeleton
          height="100%"
          width="100%"
          containerClassName="h-full w-full leading-none"
          baseColor="var(--color-grayCB)"
          highlightColor="var(--color-grayDF)"
        />
      </div>

      <div className="flex w-full flex-col gap-2">
        <Skeleton
          width="60%"
          baseColor="var(--color-grayCB)"
          highlightColor="var(--color-grayDF)"
        />
        <Skeleton
          width="40%"
          baseColor="var(--color-grayCB)"
          highlightColor="var(--color-grayDF)"
        />
      </div>
    </div>
  );
}

export function ModiweekCardSkeleton() {
  return (
    <div className="flex flex-col gap-2">
      <Skeleton
        height={426}
        width={288}
        baseColor="var(--color-grayCB)"
        highlightColor="var(--color-grayDF)"
      />
      <Skeleton
        width="50%"
        baseColor="var(--color-grayCB)"
        highlightColor="var(--color-grayDF)"
      />
    </div>
  );
}

export function CartDeliveryDetailsSkeleton() {
  return (
    <section className="flex h-full w-full flex-col items-start gap-6">
      <Skeleton
        width={160}
        height={24}
        baseColor="var(--color-grayCB)"
        highlightColor="var(--color-grayDF)"
      />

      <div className="border-grayDF w-full border"></div>

      <div className="flex w-full flex-col gap-2 text-base">
        <div className="flex w-full justify-between gap-3">
          <Skeleton
            width={140}
            baseColor="var(--color-grayCB)"
            highlightColor="var(--color-grayDF)"
          />
          <Skeleton
            width={40}
            baseColor="var(--color-grayCB)"
            highlightColor="var(--color-grayDF)"
          />
        </div>

        <Skeleton
          width={120}
          height={14}
          baseColor="var(--color-grayCB)"
          highlightColor="var(--color-grayDF)"
        />
      </div>

      <div className="flex w-full flex-col gap-2">
        <Skeleton
          width="90%"
          baseColor="var(--color-grayCB)"
          highlightColor="var(--color-grayDF)"
        />
        <Skeleton
          width="70%"
          baseColor="var(--color-grayCB)"
          highlightColor="var(--color-grayDF)"
        />
      </div>

      <div className="border-grayDF w-full border"></div>

      <Skeleton
        width="80%"
        height={20}
        baseColor="var(--color-grayCB)"
        highlightColor="var(--color-grayDF)"
      />

      <div className="mt-24 w-full">
        <Skeleton
          height={48}
          width="100%"
          baseColor="var(--color-grayCB)"
          highlightColor="var(--color-grayDF)"
        />
      </div>
    </section>
  );
}

function ShopTheLookProductSkeleton() {
  return (
    <div className="relative w-full">
      <div className="relative aspect-[392/438] w-full overflow-hidden">
        <Skeleton
          height="100%"
          width="100%"
          containerClassName="h-full w-full leading-none"
        />
      </div>

      <div className="mt-2 flex items-start justify-between gap-3">
        <div className="flex flex-1 flex-col gap-1.5">
          <Skeleton width="70%" height={12} />
          <Skeleton width="40%" height={12} />
          <Skeleton circle width={18} height={18} />
        </div>
        <Skeleton width={40} height={16} />
      </div>
    </div>
  );
}

export function ModiweekLookSkeleton() {
  return (
    <section className="relative flex w-full flex-col gap-15 min-[1440px]:gap-32 lg:justify-between min-[75rem]:flex-row">
      <div className="relative left-0 -mx-[50vw] h-[800px] w-screen self-start max-[75rem]:self-center md:static md:left-auto md:mx-0 md:w-full md:self-center lg:w-[496px] min-[75rem]:shrink-0 xl:h-[746px]">
        <Skeleton
          height="100%"
          width="100%"
          containerClassName="h-full w-full leading-none"
        />
      </div>

      <div className="flex w-full flex-col self-center">
        <Skeleton width={140} height={20} />
        <div className="mt-1">
          <Skeleton width={60} height={16} />
        </div>

        <div className="mt-6 grid grid-cols-2 gap-6 xl:grid-cols-2">
          <ShopTheLookProductSkeleton />
          <ShopTheLookProductSkeleton />
        </div>
      </div>
    </section>
  );
}

NProgress.configure({ showSpinner: false, speed: 300, minimum: 0.1 });
export default function TopPageLoader() {
  const location = useLocation();

  useEffect(() => {
    NProgress.start();
    NProgress.done();
  }, [location.pathname]);

  return null;
}
