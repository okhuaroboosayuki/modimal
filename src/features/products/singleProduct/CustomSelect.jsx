import { useState, useRef, useEffect } from "react";
import { MdOutlineArrowDropDown } from "react-icons/md";
import CheckBox from "../../../components/CheckBox";

function CustomSelect({
  options,
  value,
  onChange,
  placeholder = "Size",
  error,
  ...props
}) {
  const [isOpen, setIsOpen] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    function handleClickOutside(e) {
      if (ref.current && !ref.current.contains(e.target)) {
        setIsOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const selected = options.find((option) => option.size === value);

  return (
    <div className="relative w-full" ref={ref}>
      <button
        type="button"
        onClick={() => setIsOpen((prev) => !prev)}
        className={`flex w-full cursor-pointer items-center justify-between border px-4 py-2 text-base font-medium outline-none focus:border-black ${error ? "border-error" : "border-grayDF"}`}
      >
        <span>
          {selected ? `${selected.size} / ${selected.country}` : placeholder}
        </span>
        <span
          className={`icon transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`}
        >
          <MdOutlineArrowDropDown />
        </span>
      </button>

      {isOpen && (
        <ul className="border-grayDF absolute z-10 w-full border border-t-0 bg-white shadow-sm">
          {options.map((option) => {
            const label = `${option.size} / ${option.country}`;
            return (
              <li
                className="border-grayDF flex w-full cursor-pointer flex-col items-start border-b px-4 py-2 text-sm last:border-b-0 hover:bg-gray-100"
                key={label}
              >
                <CheckBox
                  {...props}
                  label={label}
                  boxValue={value}
                  handleChange={() => {
                    onChange(option.size);
                    setIsOpen(false);
                  }}
                  className={"w-full justify-start! self-start"}
                  isChecked={option.size === value}
                />
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
}
export default CustomSelect;
