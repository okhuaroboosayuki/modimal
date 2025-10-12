import { useDispatch, useSelector } from "react-redux";
import { useSearchParams } from "react-router-dom";
import {
  addToFilteredList,
  removeFromFilteredList,
} from "../features/filter/filterSlice";

function useFilter(paramName, paramValue, filterName = null) {
  const [searchParams, setSearchParams] = useSearchParams();
  const { filteredList } = useSelector((store) => store.productFilter);
  const dispatch = useDispatch();

  const sortValue = searchParams.get("sort");
  const isInList = filteredList.some((item) =>
    Object.entries(item).some(
      ([name, value]) => name === paramName && value === paramValue,
    ),
  );

  // sort checkbox click logic
  const handleSortParamClick = () => {
    if (sortValue === paramValue) {
      dispatch(removeFromFilteredList(paramName));
      searchParams.delete("sort");
      setSearchParams(searchParams);
    } else {
      // Switching to a new sort option
      if (sortValue) {
        const oldParam = filteredList.find(
          (item) => Object.keys(item)[0] !== paramName,
        );
        if (oldParam) {
          dispatch(removeFromFilteredList(Object.keys(oldParam)[0]));
        }
      }
      dispatch(addToFilteredList(paramName, paramValue));
      searchParams.set("sort", paramValue);
      setSearchParams(searchParams);
    }
  };

  // filter checkbox click logic
  const handleFilterParamClick = (e) => {
    const checked = e.target.checked;

    if (checked) {
      searchParams.append(filterName, paramValue);
      dispatch(addToFilteredList(paramName, paramValue));
    } else {
      const allSpecificFilter = searchParams
        .getAll(filterName)
        .filter((value) => value !== paramValue);

      searchParams.delete(filterName);
      dispatch(removeFromFilteredList(paramName));
      allSpecificFilter.forEach((paramValue) =>
        searchParams.append(filterName, paramValue),
      );
    }

    setSearchParams(searchParams);
  };

  // filtered list item remove logic
  const removeFilterParam = (paramKey) => {
    // finding the value of the filter param to be removed
    const filterParamValue = filteredList.find(
      (item) => Object.keys(item)[0] === paramKey,
    )?.[paramKey];

    // looping through all url params to find the matching key and value, then removing it, while bypassing the search param
    for (const [key, value] of searchParams.entries()) {
      if (key === "q") continue;

      if (value === filterParamValue) {
        const allSpecificFilter = searchParams
          .getAll(key)
          .filter((val) => val !== value);

        searchParams.delete(key);
        allSpecificFilter.forEach((val) => searchParams.append(key, val));
        setSearchParams(searchParams);
        break;
      }
    }

    dispatch(removeFromFilteredList(paramKey));
  };

  return {
    isInList,
    handleSortParamClick,
    handleFilterParamClick,
    removeFilterParam,
  };
}

export default useFilter;
