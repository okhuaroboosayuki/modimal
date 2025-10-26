import { RiCloseFill } from "react-icons/ri";
import useFilter from "../../hooks/useFilter";

function FilteredList({ list }) {
  const { removeFilterParam } = useFilter();

  return (
    <>
      {list.length > 0 && (
        <ul className="flex w-[300px] flex-col items-start gap-2">
          {list.map((item) => {
            const [[paramName, paramValue]] = Object.entries(item);

            return (
              <li
                key={paramValue}
                className="bg-primary-50 flex w-full items-center justify-center gap-2 px-2 py-1 text-lg text-black capitalize"
              >
                <span>{paramName}</span>

                <span
                  className="icon cursor-pointer"
                  onClick={() => removeFilterParam(paramName)}
                >
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
