import useFilter from "../../hooks/useFilter";

function FilterCheckBox({ filterName, paramName, paramValue }) {
  const { isInList, handleFilterParamClick } = useFilter(
    paramName,
    paramValue,
    filterName,
  );

  return (
    <label className="checkbox">
      <input
        type="checkbox"
        checked={isInList}
        onChange={handleFilterParamClick}
      />

      <span className="box"></span>

      {filterName === "color" && (
        <span
          className="h-4 w-4 rounded-[100%]"
          style={{ backgroundColor: paramName, border: `1px solid #606060` }}
        ></span>
      )}

      <span
        className={`text-base text-black ${filterName === "size" && "uppercase"}`}
      >
        {paramName}
      </span>
    </label>
  );
}

export default FilterCheckBox;
