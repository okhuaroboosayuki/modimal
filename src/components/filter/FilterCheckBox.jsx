import { useSearchParams } from "react-router-dom";

function FilterCheckBox({ filterName, text, value }) {
  const [searchParams, setSearchParams] = useSearchParams();

  const isChecked = searchParams.getAll(filterName).includes(value);

  const handleClick = (e) => {
    console.log(`${text} was clicked`);
    const checked = e.target.checked;

    if (checked) {
      searchParams.append(filterName, value);
    } else {
      const allSpecificFilter = searchParams
        .getAll(filterName)
        .filter((paramValue) => paramValue !== value); // get all related filter values except the unchecked one
      searchParams.delete(filterName); // clear all related filters first; e-g 'color=red&color=blue' will be cleared
      allSpecificFilter.forEach((v) => searchParams.append(filterName, v)); // re-add filtered list of values
    }

    setSearchParams(searchParams);
  };

  return (
    <label className="checkbox">
      <input type="checkbox" checked={isChecked} onChange={handleClick} />

      <span className="box"></span>

      {filterName === "color" && (
        <span
          className="h-4 w-4 rounded-[100%]"
          style={{ backgroundColor: text, border: `1px solid ${text}` }}
        ></span>
      )}

      <span className="text-base text-black">{text}</span>
    </label>
  );
}

export default FilterCheckBox;
