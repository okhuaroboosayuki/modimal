import { LoadingSpinner, ProductCardSkeleton } from "../../components/Loaders";
import EmptyProduct from "../../components/products/EmptyProduct";
import ProductCard from "../../components/products/ProductCard";
import { useFavoriteProducts } from "../favorites/useFavoriteProducts";

function FavoritesPageContent() {
  const { totalCount, favoriteProducts, isFavoriteLoading } =
    useFavoriteProducts();

  const products =
    favoriteProducts?.data?.flatMap((product) => product.products) || [];

  return (
    <section className="flex w-full flex-col items-center gap-14 px-5 pt-11 pb-12 capitalize md:px-14 lg:px-20 xl:px-27">
      <section className="flex flex-col items-center gap-4">
        <h1 className="text-neutral-black text-[1.25rem] font-semibold">
          my wish list
        </h1>

        {totalCount > 0 && (
          <span className="text-base">
            {totalCount} item{totalCount > 1 ? "s" : ""}
          </span>
        )}
      </section>

      {isFavoriteLoading ? (
        <div className="grid w-full grid-cols-1 items-start justify-center gap-4 gap-x-4 gap-y-10 self-start max-[1279px]:grid-cols-3 max-[1000px]:grid-cols-2 sm:gap-10 xl:grid-cols-4">
          {Array.from({ length: 6 }).map((_, i) => (
            <ProductCardSkeleton key={i} />
          ))}
        </div>
      ) : products?.length === 0 ? (
        <EmptyProduct message="you have no favorites." />
      ) : (
        <section className="grid w-full grid-cols-1 items-start justify-center gap-4 gap-x-4 gap-y-10 self-start max-[1279px]:grid-cols-3 max-[1000px]:grid-cols-2 sm:gap-10 xl:grid-cols-4">
          {products?.map((product) => (
            <ProductCard product={product} key={product.id} />
          ))}
        </section>
      )}
    </section>
  );
}

export default FavoritesPageContent;
