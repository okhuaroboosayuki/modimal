import { RiCloseFill } from "react-icons/ri";
import { useSelector } from "react-redux";
import FilteredList from "./FilteredList";
import Filters from "./Filters";
import useFilter from "../../hooks/useFilter";
import Button from "../Button";

function FilterContainer({ closeModal }) {
  const { filteredList } = useSelector((store) => store.productFilter);
  const { clearAllFilters } = useFilter();

  return (
    <aside
      className={`filter-container mt-7 ${closeModal ? "flex px-5" : "hidden"} flex-col gap-4 ${!closeModal && "lg:flex"} lg:w-[300px] xl:w-[408px]`}
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
            text={"clear filters"}
            clickHandler={clearAllFilters}
            styles={"bg-white w-[180px] text-primary-600 self-end"}
          />
        )}
      </>

      <Filters />

      {closeModal && filteredList.length > 0 && (
        <Button
          text={"clear filters"}
          clickHandler={clearAllFilters}
          styles={"bg-white w-[180px] text-primary-600 self-end"}
        />
      )}
    </aside>
  );
}

export default FilterContainer;
