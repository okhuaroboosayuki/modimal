import { Outlet } from "react-router-dom";
import FilterContainer from "./filter/FilterContainer";

function ProductDetailsLayout() {
  return (
    <div className="product-container">
      <FilterContainer />

      <Outlet />
    </div>
  );
}

export default ProductDetailsLayout;
