import ProductCard from "../../components/products/ProductCard";

function ModiweekLookDetails({
  imageSrc,
  productsAttachedToLook,
  dayOTheWeek,
}) {
  const isMoreThanTwoProducts = productsAttachedToLook.length > 2;

  return (
    <section
      className={`relative flex w-full flex-col lg:justify-between min-[75rem]:flex-row ${isMoreThanTwoProducts ? "gap-6 md:gap-15 xl:gap-10" : "gap-6 min-[1440px]:gap-32 md:gap-15"}`}
    >
      <div className="relative left-0 -mx-[50vw] h-[480px] w-screen self-start max-[75rem]:self-center sm:h-[800px] md:static md:left-auto md:mx-0 md:w-full md:self-center lg:w-[496px] min-[75rem]:shrink-0 xl:h-[746px]">
        <img
          src={imageSrc}
          alt={`image of ${dayOTheWeek}'s main look`}
          width={496}
          height={746}
          className="h-full w-full max-sm:object-cover lg:object-cover"
        />
      </div>

      <div className="flex w-full flex-col self-center">
        <h4 className="text-[20px] font-semibold capitalize">shop the look</h4>

        <p>
          {productsAttachedToLook.length}
          {productsAttachedToLook.length > 1 ? " items" : " item"}
        </p>

        <div
          className={`mt-6 grid ${
            isMoreThanTwoProducts
              ? "min-w-0 min-[1440px]:grid-cols-3"
              : "xl:grid-cols-2"
          } grid-cols-2 gap-6`}
        >
          {productsAttachedToLook.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              className={isMoreThanTwoProducts ? "shop-the-look-card" : ""}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default ModiweekLookDetails;
