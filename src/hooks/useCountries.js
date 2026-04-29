import { useQuery } from "@tanstack/react-query";

async function fetchCountries() {
  const res = await fetch(
    "https://countriesnow.space/api/v0.1/countries/states",
  );

  if (!res.ok) console.error("Failed to fetch countries");

  const json = await res.json();

  return json.data;
}

export function useCountries() {
  const { data: countries, isPending: isCountriesLoading } = useQuery({
    queryKey: ["countries"],
    queryFn: fetchCountries,
    staleTime: Infinity,
  });

  return { countries, isCountriesLoading };
}
