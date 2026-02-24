import { RiCloseFill } from "react-icons/ri";
import { useSearchParams } from "react-router-dom";
import useFilter from "../../hooks/useFilter";

function FilteredList({ list }) {
  const { removeFilterParam } = useFilter();
  const [searchParams] = useSearchParams();

  // Filter out items that are currently selected in the filter options
  // by checking if they exist in the URL search params
  const filteredItemsToDisplay = list.filter((item) => {
    const [[paramName, paramValue]] = Object.entries(item);

    // Map filter param names to URL param keys
    const paramKeyMap = {
      color: "color",
      fabric: "fabric",
      size: "size",
      collection: "collection",
      sort: "sort",
    };

    const urlParamKey = paramKeyMap[paramName];

    // Check if this item is NOT in the URL params (meaning it's not currently selected)
    if (urlParamKey === "sort") {
      return searchParams.get("sort") !== paramValue;
    }

    const urlParamValues = searchParams.getAll(urlParamKey);
    return !urlParamValues.includes(paramValue);
  });

  return (
    <>
      {filteredItemsToDisplay.length > 0 && (
        <ul className="flex w-full flex-col items-start gap-2">
          {filteredItemsToDisplay.map((item) => {
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
