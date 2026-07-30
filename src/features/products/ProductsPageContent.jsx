import { useEffect, useRef } from "react";
import { useLocation, useSearchParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
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
import { LoadingSpinner, ProductCardSkeleton } from "../../components/Loaders";
import MobileFilter from "../../components/filter/MobileFilter";
import MobileFilterButton from "../../components/filter/MobileFilterButton";
import BreadCrumbs from "../../components/BreadCrumbs";
import SEO from "../../components/SEO";

function ProductsPageContent({
  data,
  totalCount,
  isLoading,
  imgObj,
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
    <>
      {searchQueryState && (
        <SEO
          title={`Search results for "${searchQueryState}"`}
          description={`Discover the search results for "${searchQueryState}" at Modimal.`}
          url={`search?q=${searchQueryState}`}
        />
      )}

      <Modal>
        <section className="product-container">
          <FilterContainer />

          <section className="grid-head mt-8 flex w-full flex-col items-center justify-center gap-5 overflow-x-auto md:gap-10">
            <div className="constant-left-padding self-start">
              <BreadCrumbs pageName={pageName} />
            </div>

            {imgObj && (
              <div className="w-full">
                <LazyLoadImage
                  src={imgObj.src}
                  srcSet={imgObj.srcSet}
                  sizes="100vw"
                  placeholderSrc={imgObj.blur}
                  effect="blur"
                  alt=""
                  fetchPriority="high"
                  threshold={100}
                  delayMethod="debounce"
                  delayTime={500}
                  visibleByDefault
                  className="w-full"
                  wrapperClassName="inset-0 block w-full"
                  wrapperProps={{
                    style: { transitionDelay: "1s" },
                  }}
                />
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
            <div className="grid-body mt-8 grid w-full grid-cols-2 gap-x-4 gap-y-10 max-md:px-5 md:w-[650px] md:gap-x-10 xl:w-[680px]">
              {Array.from({ length: 6 }).map((_, i) => (
                <ProductCardSkeleton key={i} />
              ))}
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
    </>
  );
}

export default ProductsPageContent;
