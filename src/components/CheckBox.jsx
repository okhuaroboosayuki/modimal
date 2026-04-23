function CheckBox({
  handleChange,
  boxValue,
  label,
  isChecked,
  filterName,
  className,
  isDisabled,
  ...rest
}) {
  return (
    <label className={`checkbox ${className}`}>
      <input
        type="checkbox"
        onChange={handleChange}
        value={boxValue}
        checked={isChecked}
        disabled={isDisabled}
        {...rest}
      />

      <span className="box"></span>

      {filterName === "color" && (
        <span
          className="h-4 w-4 rounded-[100%]"
          style={{ backgroundColor: label, border: `1px solid #606060` }}
        ></span>
      )}

      <span
        className={`text-base text-black ${filterName === "size" && "uppercase"}`}
      >
        {label}
      </span>
    </label>
  );
}

export default CheckBox;
