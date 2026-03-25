import { useEffect, useRef } from "react";
import { useLocation, useSearchParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setProducts } from "../filter/filterSlice";
import {
  clearSearchQuerySate,
  setSearchQueryState,
} from "../search/searchSlice";
import FilterContainer from "../../components/filter/FilterContainer";
import Modal from "./../modal/Modal";
import Search from "../search/Search";
import ProductsList from "./../../components/products/ProductsList";
import EmptyProduct from "../../components/products/EmptyProduct";
import { LoadingSpinner } from "../../components/Loaders";
import MobileFilter from "../../components/filter/MobileFilter";
import MobileFilterButton from "../../components/filter/MobileFilterButton";
import BreadCrumbs from "../../components/BreadCrumbs";

function ProductsPageContent({
  data,
  totalCount,
  isLoading,
  heroImage,
  hasNextPage,
  isFetchingNextPage,
  fetchNextPage,
}) {
  const [searchParams] = useSearchParams();
  const dispatch = useDispatch();
  const { searchQueryState } = useSelector((store) => store.searchReducer);
  const location = useLocation();

  const hasDispatched = useRef(false);
  const searchQuery = searchParams.get("q");
  const previousSearchQuery = useRef(null);

  useEffect(() => {
    if (!data) return;

    if (searchQuery) {
      if (data.length > 0 && searchQuery !== previousSearchQuery.current) {
        dispatch(setProducts(data));
        dispatch(setSearchQueryState(searchQuery));
        previousSearchQuery.current = searchQuery;
        return;
      }
    }

    if (data.length > 0 && !hasDispatched.current) {
      dispatch(clearSearchQuerySate());
      dispatch(setProducts(data));
      hasDispatched.current = true;
    }
  }, [data, dispatch, searchQuery]);

  const products = data || [];
  const totalItems = searchQuery && totalCount;

  const pageName = location.pathname.split("/")[1].split("-").join(" ");

  return (
    <Modal>
      <section className="product-container">
        <FilterContainer />

        <section className="grid-head mt-8 flex w-full flex-col items-center justify-center gap-5 overflow-x-auto md:gap-10">
          <div className="constant-left-padding self-start">
            <BreadCrumbs pageName={pageName} />
          </div>

          {heroImage && (
            <div className="w-full">
              <img src={heroImage} loading="lazy" className="w-full" />
            </div>
          )}

          {searchQueryState && <Search height="0" />}

          {searchQuery && products.length !== 0 && (
            <p className="hidden text-[20px] lg:block">
              {totalItems} item{totalItems > 1 ? "s" : ""}
            </p>
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

        {isLoading ? (
          <div className="grid-body mt-9 w-full">
            <LoadingSpinner />
          </div>
        ) : !products || products.length === 0 ? (
          <div className="grid-body mt-9 w-full">
            <EmptyProduct />
          </div>
        ) : (
          <ProductsList
            products={products}
            hasNextPage={hasNextPage}
            isFetchingNextPage={isFetchingNextPage}
            fetchNextPage={fetchNextPage}
          />
        )}
      </section>
    </Modal>
  );
}

export default ProductsPageContent;
