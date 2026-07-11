import { useBestSellingProducts } from "../../features/products/useBestSellingProducts";
import ProductCard from "../products/ProductCard";
import { ProgressLink } from "../ProgressLinks";

function Bestsellers() {
  const { bestSellingProducts } = useBestSellingProducts();

  return (
    <div className="flex flex-col justify-center gap-6 capitalize">
      <div className="flex items-center justify-between gap-3">
        <h1 className="text-2xl font-semibold md:text-[32px]">bestsellers</h1>

        <ProgressLink
          to={"/best-seller"}
          className="text-primary-600 text-sm hover:underline"
        >
          view all
        </ProgressLink>
      </div>

      <div className="bs-carousel flex w-full items-start gap-6">
        {bestSellingProducts?.slice(0, 3).map((product) => (
          <ProductCard
            product={product}
            key={product.id}
            isRelatedProductPage={true}
            className="card"
          />
        ))}
      </div>
    </div>
  );
}

export default Bestsellers;
