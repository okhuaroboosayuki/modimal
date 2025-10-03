import { useState } from "react";
import { HiMinus, HiPlusSmall } from "react-icons/hi2";
import SortCheckBox from "./SortCheckBox";
import { useSearchParams } from "react-router-dom";

function SortField({ sortName, sortOptions }) {
  const [searchParams] = useSearchParams();
  const hasSort = searchParams.has("sort");
  const [showOptions, setShowOptions] = useState(hasSort);

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
        <h4 className="w-full">{sortName}</h4>

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
          {sortOptions.map((option) => (
            <SortCheckBox
              paramName={option.label}
              paramValue={option.value}
              key={option.label}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default SortField;
