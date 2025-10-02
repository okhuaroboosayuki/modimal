import { useSelector } from "react-redux";
import FilterField from "./FilterField";
import SortField from "./SortField";

function Filters() {
  const { colors, fabrics } = useSelector((store) => store.productFilter);

  const sortOptions = [
    { value: "featured", label: "featured" },
    { value: "bestseller", label: "best seller" },
    { value: "price-asc", label: "price: low to high" },
    { value: "price-desc", label: "price: high to low" },
  ];

  const sizeOptions = [
    { value: "XS", label: "xs / us (0-4)" },
    { value: "S", label: "s / us (4-6)" },
    { value: "M", label: "m / us (6-10)" },
    { value: "L", label: "l / us (10-14)" },
    { value: "XL", label: "xl / us (14-18)" },
    { value: "XXL", label: "xxl / us (18-22)" },
  ];

  const collectionOptions = [
    { value: "inStock", label: "in stock" },
    { value: "outOfStock", label: "out of stock" },
  ];

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
