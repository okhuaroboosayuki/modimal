import { useSearchParams } from "react-router-dom";

function SortCheckBox({ text, value }) {
  const [searchParams, setSearchParams] = useSearchParams();
  const sortValue = searchParams.get("sort") || "";

  const handleClick = () => {
    // if there is already a sort value and the same as the clicked one, uncheck it
    if (sortValue === value) {
      searchParams.delete("sort");
      setSearchParams(searchParams);
      return;
    } else {
      searchParams.set("sort", value);
      setSearchParams(searchParams);
    }
  };

  return (
    <label className="checkbox">
      <input
        type="checkbox"
        onChange={handleClick}
        value={value}
        checked={sortValue === value}
      />

      <span className="box"></span>

      <span className="text-base text-black">{text}</span>
    </label>
  );
}

export default SortCheckBox;
