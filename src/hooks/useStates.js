import { useQuery } from "@tanstack/react-query";

async function fetchStates(country) {
  const res = await fetch(
    "https://countriesnow.space/api/v0.1/countries/states",
    {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ country }),
    },
  );

  if (!res.ok) console.error("Failed to fetch states");

  const json = await res.json();

  return json.data.states;
}

export function useStates(country) {
  const { data: states, isPending: isStatesLoading } = useQuery({
    queryKey: ["states", country],
    queryFn: () => fetchStates(country),
    enabled: !!country,
    staleTime: Infinity,
  });

  return { states, isStatesLoading };
}
