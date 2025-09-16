import { useEffect, useState } from "react";

export function useDebounce(query, delay = 400) {
  const [debounceQuery, setDebounceQuery] = useState(query);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setDebounceQuery(query);
    }, delay);

    return () => clearTimeout(timeout);
  }, [delay, query]);

  return debounceQuery;
}
