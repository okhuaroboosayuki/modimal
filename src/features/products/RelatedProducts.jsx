import { useRef } from "react";
import { LoadingSpinner } from "../../components/Loaders";
import ProductCard from "../../components/products/ProductCard";

function RelatedProducts({ isLoading, relatedProducts }) {
  const sliderRef = useRef(null);
  const isDown = useRef(false);
  const startX = useRef(0);
  const scrollLeft = useRef(0);

  // Adjust carousel width and padding based on the number of related products
  const isRelatedProductsOne = relatedProducts.length === 1;
  const isTwoOrLessProducts = relatedProducts.length <= 2;

  function handleMouseDown(e) {
    const slider = sliderRef.current;
    if (!slider) return;
    isDown.current = true;
    startX.current = e.pageX - slider.offsetLeft;
    scrollLeft.current = slider.scrollLeft;
  }

  function handleMouseLeave() {
    isDown.current = false;
  }

  function handleMouseUp() {
    isDown.current = false;
  }

  function handleMouseMove(e) {
    const slider = sliderRef.current;
    if (!isDown.current || !slider) return;
    e.preventDefault();
    const x = e.pageX - slider.offsetLeft;
    const walk = x - startX.current;
    slider.scrollLeft = scrollLeft.current - walk;
  }

  return (
    <section className="flex w-full touch-pan-x flex-col items-start gap-8 px-5 sm:px-13 xl:px-32">
      <h3 className="px-5 text-base font-medium capitalize sm:text-[2rem]">
        you may also like
      </h3>

      <div className={`w-full`}>
        {isLoading ? (
          <div className="w-full">
            <LoadingSpinner />
          </div>
        ) : (
          <div
            ref={sliderRef}
            className={`max-lg:hide-scrollbar drag-scroll w-full overflow-x-auto pb-2`}
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUp}
            onMouseLeave={handleMouseLeave}
          >
            <div
              className={`flex h-full ${isRelatedProductsOne ? "w-[300px]" : isTwoOrLessProducts ? "" : "w-[1000px] xl:w-[1200px]"} gap-6 select-none`}
            >
              {relatedProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

export default RelatedProducts;
