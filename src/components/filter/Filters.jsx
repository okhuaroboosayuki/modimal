import { useSelector } from "react-redux";
import FilterField from "./FilterField";
import SortField from "./SortField";
import { selectColors, selectFabrics } from "../../features/filter/filterSlice";
import {
  collectionOptions,
  sizeOptions,
  sortOptions,
} from "../../utils/contants";

function Filters() {
  const colors = useSelector(selectColors);
  const fabrics = useSelector(selectFabrics);

  return (
    <section className="flex w-full flex-col gap-4">
      <SortField sortName={"sort by"} sortOptions={sortOptions} />

      <FilterField filterName={"size"} filterOptions={sizeOptions} />

      <FilterField filterName={"color"} filterOptions={colors} />

      <FilterField
        filterName={"collection"}
        filterOptions={collectionOptions}
      />

      <FilterField filterName={"fabric"} filterOptions={fabrics} />
    </section>
  );
}

export default Filters;
