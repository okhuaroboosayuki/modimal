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

NProgress.configure({ showSpinner: false, speed: 300, minimum: 0.1 });
export default function TopPageLoader() {
  const location = useLocation();

  useEffect(() => {
    NProgress.start();
    NProgress.done();
  }, [location.pathname]);

  return null;
}
