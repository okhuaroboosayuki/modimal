import { useEffect, useRef, useState } from "react";
import Input from "../../components/Input";
import { useCountries } from "../../hooks/useCountries";

function CountryDropdown({ field, onCountryChange }) {
  const [search, setSearch] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef(null);
  const inputRef = useRef(null);

  const { countries, isCountriesLoading } = useCountries();
  const filtered =
    !isCountriesLoading &&
    countries.filter((c) =>
      c.name.toLowerCase().includes(search.toLowerCase()),
    );
  const controlledHeight = filtered.length <= 7 ? "h-fit" : "h-[270px]";

  useEffect(() => {
    function handleClickOutside(e) {
      if (containerRef.current && !containerRef.current.contains(e.target)) {
        setIsOpen(false);
        setSearch("");
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  useEffect(() => {
    if (isOpen) inputRef.current?.focus();
  }, [isOpen]);

  const handleSelect = (country) => {
    field.onChange(country.name);
    onCountryChange(country.name);
    setIsOpen(false);
    setSearch("");
  };

  return (
    <div className="h-full w-full" ref={containerRef}>
      <button
        type="button"
        onClick={() => setIsOpen((prev) => !prev)}
        className={`${field.value ? "text-base text-black" : "text-gray60 text-xs"} h-full w-full cursor-pointer text-start capitalize`}
      >
        {field.value || "country/region"}
      </button>

      {isOpen && (
        <div className="border-primary-300 absolute left-0 z-10 flex w-full flex-col gap-4 border border-t-0 bg-white px-3 py-2 shadow-sm">
          <div
            className="border-grayDF w-full rounded-md border p-1"
            ref={inputRef}
          >
            <Input
              type={"search"}
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="search country..."
              width={"w-full pl-1"}
            />
          </div>

          <ul
            className={`hide-scrollbar ${controlledHeight} overflow-y-scroll p-1 text-sm`}
          >
            {isCountriesLoading ? (
              <li>loading...</li>
            ) : filtered.length === 0 ? (
              <li>no results</li>
            ) : (
              filtered.map((country) => (
                <li
                  key={country.iso2}
                  onClick={() => handleSelect(country)}
                  className={`border-b-grayDF cursor-pointer border-b py-2.5 last:border-b-0 hover:bg-gray-100 ${
                    field.value === country.name
                      ? "text-primary-600 font-semibold"
                      : ""
                  }`}
                >
                  {country.name}
                </li>
              ))
            )}
          </ul>
        </div>
      )}
    </div>
  );
}

export default CountryDropdown;
