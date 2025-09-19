import FilterField from "./FilterField";
import SortField from "./SortField";

function FilterContainer({ products }) {
  const sortOptions = [
    { value: "featured", label: "featured" },
    { value: "best-seller", label: "best seller" },
    { value: "price-asc", label: "price: low to high" },
    { value: "price-desc", label: "price: high to low" },
  ];

  const sizeOptions = Array.from(
    new Set(
      products.flatMap((product) =>
        product.availableSizes.map(
          (sizeObj) => `${sizeObj.size} / ${sizeObj.country}`,
        ),
      ),
    ),
  ).map((size) => {
    const [sizeValue] = size.split(" / ");
    return { value: sizeValue, label: size };
  });

  const colorOptions = Array.from(
    new Set(products.flatMap((product) => product.availableColors)),
  ).map((color) => ({
    value: color,
    label: color,
  }));

  const collectionOptions = [
    { value: "inStock", label: "in stock" },
    { value: "outOfStock", label: "out of stock" },
  ];

  const fabricOptions = products.reduce((acc, product) => {
    const type = product.fabricDetails.type;
    if (!acc.some((opt) => opt.value === type)) {
      acc.push({ value: type, label: type });
    }
    return acc;
  }, []);

  return (
    <aside className="flex flex-col gap-4">
      <h3 className="text-[2rem] font-semibold">Filters</h3>

      <div>show selected options when filtered/sorted</div>

      <div>buttons when filtered/sorted</div>

      <section className="flex w-full flex-col gap-4">
        <SortField sortName={"sort by"} sortOptions={sortOptions} />

        <FilterField filterName={"size"} filterOptions={sizeOptions} />

        <FilterField filterName={"color"} filterOptions={colorOptions} />

        <FilterField
          filterName={"collection"}
          filterOptions={collectionOptions}
        />

        <FilterField filterName={"fabric"} filterOptions={fabricOptions} />
      </section>
    </aside>
  );
}

export default FilterContainer;
