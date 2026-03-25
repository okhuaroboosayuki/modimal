import Button from "../Button";
import { SmallLoader } from "../Loaders";
import ProductCard from "./ProductCard";

function ProductsList({
  products,
  hasNextPage,
  isFetchingNextPage,
  fetchNextPage,
}) {
  return (
    <section className="grid-body mt-8 grid w-full grid-cols-2 gap-x-4 gap-y-10 max-md:px-5 md:w-[650px] md:gap-x-6 xl:w-[780px]">
      {products.map((product) => (
        <ProductCard product={product} key={product.id} />
      ))}

      {hasNextPage && (
        <div className="col-span-2 flex justify-center">
          <Button
            styles={
              "font-medium text-primary-600 border-primary-600! w-[11.5rem]"
            }
            clickHandler={() => fetchNextPage()}
            isDisabled={isFetchingNextPage}
          >
            {isFetchingNextPage ? <SmallLoader /> : "load more"}
          </Button>
        </div>
      )}
    </section>
  );
}

export default ProductsList;
