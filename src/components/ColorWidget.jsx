function ColorWidget({ color, isSelected, onSelect, cursor }) {
  return (
    <span
      className={`h-6 w-6 ${cursor} rounded-[100%]`}
      style={{
        backgroundColor: color,
        border: `1px solid ${isSelected ? "#000" : "#606060"}`,
        outline: isSelected ? "2px solid #000" : "none",
        outlineOffset: isSelected && "3px",
      }}
      title={color}
      onClick={onSelect}
    ></span>
  );
}

export default ColorWidget;
// #c30000
