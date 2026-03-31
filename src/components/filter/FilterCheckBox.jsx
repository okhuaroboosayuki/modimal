import useFilter from "../../hooks/useFilter";
import CheckBox from "../CheckBox";

function FilterCheckBox({ filterName, paramName, paramValue }) {
  const { isInList, handleFilterParamClick } = useFilter(
    paramName,
    paramValue,
    filterName,
  );

  return (
    <CheckBox
      handleChange={handleFilterParamClick}
      label={paramName}
      isChecked={isInList}
      filterName={filterName}
    />
  );
}

export default FilterCheckBox;
