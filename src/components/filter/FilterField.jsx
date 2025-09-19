import { useState } from "react";
import { HiMinus, HiPlusSmall } from "react-icons/hi2";
import FilterCheckBox from "./FilterCheckBox";

function FilterField({ filterName, filterOptions }) {
  const [showOptions, setShowOptions] = useState(false);

  const toggleShowOptions = () => {
    setShowOptions((prev) => !prev);
  };

  return (
    <div
      className={`${showOptions ? "border-primary-200 border" : "border-none"} transition-500-in-out capitalize`}
    >
      <div
        className={`${!showOptions ? "bg-primary font-semibold text-white" : "text-primary bg-white font-semibold"} transition-500-in-out flex cursor-pointer items-center gap-4 px-4 py-3.5`}
        onClick={toggleShowOptions}
      >
        <h4 className="w-full">{filterName}</h4>

        <span className="icon">
          {!showOptions ? (
            <HiPlusSmall fill="white" className="transition-500-in-out" />
          ) : (
            <HiMinus fill="#748c70" className="transition-500-in-out" />
          )}
        </span>
      </div>

      {showOptions && (
        <div className="transition-500-in-out py3 flex flex-col items-start gap-1 pl-4">
          {filterOptions.map((option) => (
            <FilterCheckBox
              filterName={filterName}
              text={option.label}
              value={option.value}
              key={option.label}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default FilterField;
