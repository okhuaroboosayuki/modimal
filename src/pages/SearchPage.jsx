import { useSearchProducts } from "../features/products/useSearchProducts";
import ProductsList from "../components/products/ProductsList";
import { useDispatch } from "react-redux";
import { useSearchParams } from "react-router-dom";
import { useEffect, useRef } from "react";
import { setProducts } from "../features/products/filterSlice";
import MobileFilter from "../components/filter/MobileFilter";
import Modal from "../components/Modal";
import MobileFilterButton from "../components/filter/MobileFilterButton";
import { LoadingSpinner } from "../components/Loaders";
import EmptyProduct from "../components/products/EmptyProduct";
import FilterContainer from "../components/filter/FilterContainer";

function SearchPage() {
  const { data, isSearching } = useSearchProducts();
  const dispatch = useDispatch();
  const [searchParams] = useSearchParams();
  const searchQuery = searchParams.get("q");
  const previousSearchQuery = useRef(null);

  useEffect(() => {
    if (data && searchQuery !== previousSearchQuery.current) {
      dispatch(setProducts(data));
      previousSearchQuery.current = searchQuery;
    }
  }, [data, searchQuery, dispatch]);

  const products = data?.data || [];
  const totalItems = products.length || 0;

  return (
    <Modal>
      <section className="product-container">
        {!isSearching && <FilterContainer />}

        {!isSearching && (
          <section className="grid-head flex w-full flex-col items-center gap-10">
            <div>search input</div>

            <p className="hidden text-[20px] lg:block">{totalItems} items</p>

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
        )}

        {isSearching ? (
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

export default SearchPage;
