import { RiCloseFill } from "react-icons/ri";
import { useSelector } from "react-redux";
import useFilter from "../../hooks/useFilter";

function FilteredList() {
  const { filteredList } = useSelector((store) => store.productFilter);
  const { removeFilterParam } = useFilter();

  return (
    <>
      {filteredList.length > 0 && (
        <ul className="flex w-[300px] flex-col items-start gap-2">
          {filteredList.map((item) => {
            const [[paramName, paramValue]] = Object.entries(item);

            return (
              <li
                key={paramValue}
                onClick={() => removeFilterParam(paramName)}
                className="bg-primary-50 flex w-full items-center justify-center gap-2 px-2 py-1 text-lg text-black capitalize"
              >
                <span>{paramName}</span>

                <span className="icon cursor-pointer">
                  <RiCloseFill />
                </span>
              </li>
            );
          })}
        </ul>
      )}
    </>
  );
}

export default FilteredList;
