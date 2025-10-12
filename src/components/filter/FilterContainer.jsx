import { RiCloseFill } from "react-icons/ri";
import FilteredList from "./FilteredList";
import Filters from "./Filters";

function FilterContainer({ closeModal }) {
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
        <FilteredList />

        {!closeModal && <div>buttons to clear applied filters</div>}
      </>

      <Filters />

      {closeModal && <div>buttons to clear applied filters</div>}
    </aside>
  );
}

export default FilterContainer;
