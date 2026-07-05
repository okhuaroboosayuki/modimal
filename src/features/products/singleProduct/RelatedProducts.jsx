import { LoadingSpinner } from "../../../components/Loaders";
import ProductCard from "./../../../components/products/ProductCard";

function RelatedProducts({ isLoading, relatedProducts }) {
  return (
    <section className="mt-3 flex w-full flex-col items-start gap-8 px-5 sm:px-13 xl:px-32">
      <h3 className="text-[20px] font-semibold capitalize sm:text-[2rem]">
        you may also like
      </h3>

      <div className="w-full">
        {isLoading ? (
          <div className="w-full">
            <LoadingSpinner />
          </div>
        ) : (
          <div className="rp-carousel w-full pb-2">
            {relatedProducts.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                isRelatedProductPage={true}
                className="rp-carousel-card"
              />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}

export default RelatedProducts;
