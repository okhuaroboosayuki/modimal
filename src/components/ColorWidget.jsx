function ColorWidget({ color }) {
  return (
    <span
      className="h-6 w-6 rounded-[100%]"
      style={{ backgroundColor: color, border: `1px solid #606060` }}
    ></span>
  );
}

export default ColorWidget;
