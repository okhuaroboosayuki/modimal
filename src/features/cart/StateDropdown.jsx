import { useEffect, useRef, useState } from "react";
import { useStates } from "../../hooks/useStates";
import { RiArrowDownSLine } from "react-icons/ri";

function StateDropdown({ field, country }) {
  const [isOpen, setIsOpen] = useState(false);
  const ref = useRef(null);
  const { states, isStatesLoading } = useStates(country);

  const controlledHeight = states?.length <= 7 ? "h-fit" : "h-[270px]";

  useEffect(() => {
    function handleClickOutside(e) {
      if (ref.current && !ref.current.contains(e.target)) setIsOpen(false);
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="h-full w-full" ref={ref}>
      <button
        type="button"
        onClick={() => setIsOpen((prev) => !prev)}
        disabled={!country}
        className={`${!country ? "cursor-not-allowed opacity-50" : "cursor-pointer"} flex h-full w-full items-center justify-center text-start capitalize`}
      >
        <span
          className={`${field.value ? "text-base text-black" : "text-gray60"} flex h-full w-full items-center text-xs`}
        >
          {country !== undefined ? field.value || "state/city" : "state/city"}
        </span>

        <span
          className={`transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`}
        >
          <RiArrowDownSLine />
        </span>
      </button>

      {isOpen && (
        <ul
          className={`hide-scrollbar ${controlledHeight} border-primary-300 absolute left-0 z-10 flex w-full flex-col gap-1 overflow-y-scroll border border-t-0 bg-white p-1 px-3 text-sm shadow-sm`}
        >
          {isStatesLoading ? (
            <li>loading...</li>
          ) : states.length === 0 ? (
            <li>no results</li>
          ) : (
            states.map((state) => {
              const splittedState = state.name.split(" ")[0];

              return (
                <li
                  key={state.state_code}
                  onClick={() => {
                    field.onChange(state.name);
                    setIsOpen(false);
                  }}
                  className={`border-b-grayDF cursor-pointer border-b py-2 last:border-b-0 hover:bg-gray-100 ${
                    field.value === state.name
                      ? "text-primary-600 font-semibold"
                      : ""
                  }`}
                >
                  {splittedState}
                </li>
              );
            })
          )}
        </ul>
      )}
    </div>
  );
}

export default StateDropdown;
