function CheckBox({
  handleChange,
  boxValue,
  shape = "box",
  label,
  isChecked,
  filterName,
  className,
  isDisabled,
  ...rest
}) {
  return (
    <label className={`checkbox ${className}`} tabIndex={0}>
      <input
        type="checkbox"
        onChange={handleChange}
        value={boxValue}
        checked={isChecked}
        disabled={isDisabled}
        {...rest}
      />

      {shape === "box" && <span className="box"></span>}

      {shape === "round" && <span className="round"></span>}

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
