import { useEffect, useRef } from "react";
import { useDispatch } from "react-redux";
import { useProducts } from "../features/products/useProducts";
import { setProducts } from "../features/filter/filterSlice";
import EmptyProduct from "../components/products/EmptyProduct";
import ProductsList from "../components/products/ProductsList";
import shopAllImage from "/images/frame-427319608.png";
import Modal from "../features/modal/Modal";
import MobileFilter from "../components/filter/MobileFilter";
import MobileFilterButton from "../components/filter/MobileFilterButton";
import { LoadingSpinner } from "../components/Loaders";
import FilterContainer from "../components/filter/FilterContainer";

function AllProducts() {
  const { isAllProductLoading, data } = useProducts();
  const dispatch = useDispatch();
  const hasDispatched = useRef(false);

  useEffect(() => {
    if (data && !hasDispatched.current) {
      dispatch(setProducts(data));
      hasDispatched.current = true;
    }
  }, [data, dispatch]);

  const products = data?.data || [];

  return (
    <Modal>
      <section className="product-container">
        <FilterContainer />

        <section className="grid-head flex w-full flex-col items-center justify-center gap-10">
          <div className="w-full">
            <img
              src={shopAllImage}
              alt="Two women wearing minimalist green and white outfits outdoors — one in an olive wrap blouse smiling under the sun, and the other in olive trousers and a white top holding a woven bag outside a modern house."
              loading="lazy"
              className="w-full"
            />
          </div>

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

        {isAllProductLoading ? (
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

export default AllProducts;
