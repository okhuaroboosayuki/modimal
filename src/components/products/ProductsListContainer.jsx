import FilterContainer from "../filter/FilterContainer";
import ProductsList from "./ProductsList";

function ProductsListContainer({ products }) {
  return (
    <section className="product-container">
      <FilterContainer products={products} />

      <ProductsList products={products} />
    </section>
  );
}

export default ProductsListContainer;
