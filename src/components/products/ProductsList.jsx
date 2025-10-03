import ProductCard from "./ProductCard";

function ProductsList({ products }) {
  return (
    <section className="grid-body mt-8 grid w-full grid-cols-2 gap-x-4 gap-y-10 md:gap-x-6">
      {products.map((product) => (
        <ProductCard product={product} key={product.id} />
      ))}
    </section>
  );
}

export default ProductsList;
