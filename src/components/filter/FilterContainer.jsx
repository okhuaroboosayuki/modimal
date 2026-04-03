import { RiCloseFill } from "react-icons/ri";
import { useSelector, useDispatch } from "react-redux";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { clearFilteredList } from "../../features/filter/filterSlice";
import FilteredList from "./FilteredList";
import Filters from "./Filters";
import useFilter from "../../hooks/useFilter";
import Button from "../Button";

function FilterContainer({ closeModal }) {
  const { filteredList } = useSelector((store) => store.productFilter);
  const { clearAllFilters } = useFilter();
  const dispatch = useDispatch();
  const location = useLocation();

  // Clear filtered list when navigation occurs
  useEffect(() => {
    dispatch(clearFilteredList());
  }, [location.pathname, dispatch]);

  return (
    <aside
      className={`filter-container constant-left-padding mt-7 ${closeModal ? "flex px-5" : "hidden"} flex-col gap-4 ${!closeModal && "lg:flex"} lg:w-[300px] xl:w-[408px]`}
    >
      <div className="flex items-center justify-between">
        <h3 className="text-[2rem] font-semibold">Filters</h3>

        {closeModal && (
          <span className="icon cursor-pointer" onClick={closeModal}>
            <RiCloseFill />
          </span>
        )}
      </div>

      <>
        <FilteredList list={filteredList} />

        {!closeModal && filteredList.length > 0 && (
          <Button
            clickHandler={clearAllFilters}
            className={"text-primary-600 w-[180px] self-end bg-white"}
          >
            clear filters
          </Button>
        )}
      </>

      <Filters />

      {closeModal && filteredList.length > 0 && (
        <Button
          clickHandler={clearAllFilters}
          className={"text-primary-600 w-[180px] self-end bg-white"}
        >
          clear filters
        </Button>
      )}
    </aside>
  );
}

export default FilterContainer;
