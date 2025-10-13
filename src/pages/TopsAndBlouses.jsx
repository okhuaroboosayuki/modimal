import { useEffect, useRef } from "react";
import { useDispatch } from "react-redux";
import toast from "react-hot-toast";
import Modal from "../features/modal/Modal";
import { useProductsByCategory } from "../features/products/useProductsByCategory";
import { setProducts } from "../features/filter/filterSlice";
import { LoadingSpinner } from "../components/Loaders";
import EmptyProduct from "../components/products/EmptyProduct";
import ProductsList from "../components/products/ProductsList";
import FilterContainer from "../components/filter/FilterContainer";
import MobileFilterButton from "../components/filter/MobileFilterButton";
import MobileFilter from "../components/filter/MobileFilter";

function TopsAndBlouses() {
  const { isProductCatLoading, data } = useProductsByCategory();
  const dispatch = useDispatch();
  const hasDispatched = useRef(false);

  useEffect(() => {
    if (data && !hasDispatched.current) {
      dispatch(setProducts(data));
      hasDispatched.current = true;
    }
  }, [data, dispatch]);

  const products = data?.data || [];

  if (data && products.length === 0) {
    toast.error(`Products could not be loaded`);
  }
  console.log(isProductCatLoading, data);

  return (
    <Modal>
      <section className="product-container">
        <FilterContainer />

        <section className="grid-head flex w-full flex-col items-center justify-center gap-10">
          <>
            <Modal.Open opens={"mobile-filter"}>
              <MobileFilterButton />
            </Modal.Open>
            <Modal.Window
              name={"mobile-filter"}
              containerId={"root"}
              styles={"filter-modal"}
            >
              <MobileFilter />
            </Modal.Window>
          </>
        </section>

        {isProductCatLoading ? (
          <div className="grid-body mt-9 w-full">
            <LoadingSpinner />
          </div>
        ) : !products || products.length === 0 ? (
          <div className="grid-body mt-9 w-full">
            <EmptyProduct />
          </div>
        ) : (
          <ProductsList products={products} />
        )}
      </section>
    </Modal>
  );
}

export default TopsAndBlouses;
