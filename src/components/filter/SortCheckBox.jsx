import useFilter from "../../hooks/useFilter";

function SortCheckBox({ paramName, paramValue }) {
  const { isInList, handleSortParamClick } = useFilter(paramName, paramValue);

  return (
    <label className="checkbox">
      <input
        type="checkbox"
        onChange={handleSortParamClick}
        value={paramValue}
        checked={isInList}
      />

      <span className="box"></span>

      <span className="text-base text-black">{paramName}</span>
    </label>
  );
}

export default SortCheckBox;
