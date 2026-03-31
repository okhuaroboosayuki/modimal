import useFilter from "../../hooks/useFilter";
import CheckBox from "../CheckBox";

function SortCheckBox({ paramName, paramValue }) {
  const { isInList, handleSortParamClick } = useFilter(paramName, paramValue);

  return (
    <CheckBox
      boxValue={paramValue}
      label={paramName}
      isChecked={isInList}
      handleChange={handleSortParamClick}
    />
  );
}

export default SortCheckBox;
