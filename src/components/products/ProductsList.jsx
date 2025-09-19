import ProductCard from "./ProductCard";

function ProductsList({ products }) {
  return (
    <section className="grid grid-cols-2 place-items-end gap-y-10">
      {products.map((product) => (
        <ProductCard product={product} key={product.id} />
      ))}
    </section>
  );
}

export default ProductsList;
