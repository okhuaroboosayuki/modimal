import { useEffect, useRef } from "react";
import { useSearchParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setProducts } from "../filter/filterSlice";
import toast from "react-hot-toast";
import FilterContainer from "../../components/filter/FilterContainer";
import Modal from "./../modal/Modal";
import ProductsList from "./../../components/products/ProductsList";
import EmptyProduct from "../../components/products/EmptyProduct";
import { LoadingSpinner } from "../../components/Loaders";
import MobileFilter from "../../components/filter/MobileFilter";
import MobileFilterButton from "../../components/filter/MobileFilterButton";

function ProductsPageContent({ data, loader, totalItems, heroImage }) {
  const [searchParams] = useSearchParams();
  const dispatch = useDispatch();
  const hasDispatched = useRef(false);
  const searchQuery = searchParams.get("q");
  const previousSearchQuery = useRef(null);

  useEffect(() => {
    if (searchQuery) {
      if (data && searchQuery !== previousSearchQuery.current) {
        dispatch(setProducts(data));
        previousSearchQuery.current = searchQuery;
        return;
      }
    }

    if (data && !hasDispatched.current) {
      dispatch(setProducts(data));
      hasDispatched.current = true;
    }
  }, [data, dispatch, searchQuery]);

  const products = data?.data || [];

  if (data && products.length === 0) {
    toast.error(`Products could not be loaded`);
  }

  return (
    <Modal>
      <section className="product-container">
        <FilterContainer />

        <section className="grid-head flex w-full flex-col items-center justify-center gap-10">
          {heroImage && (
            <div className="w-full">
              <img
                src={heroImage}
                alt="Two women wearing minimalist green and white outfits outdoors — one in an olive wrap blouse smiling under the sun, and the other in olive trousers and a white top holding a woven bag outside a modern house."
                loading="lazy"
                className="w-full"
              />
            </div>
          )}

          {totalItems && (
            <>
              <div>search input</div>

              <p className="hidden text-[20px] lg:block">{totalItems} items</p>
            </>
          )}
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

        {loader ? (
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

export default ProductsPageContent;
