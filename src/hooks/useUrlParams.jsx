import { useSearchParams } from "react-router-dom";

function useUrlParams() {
  const [searchParams] = useSearchParams();

  const searchValue = searchParams.get("q");

  const filters = {
    fabric: searchParams.getAll("fabric"),
    color: searchParams.getAll("color"),
    size: searchParams.getAll("size"),
    collection: searchParams.getAll("collection"),
  };

  const sortBy = searchParams.get("sort");

  return { searchValue, filters, sortBy };
}

export default useUrlParams;
