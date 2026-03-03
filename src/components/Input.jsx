function Input({
  type,
  name,
  placeholder,
  width,
  customStyle,
  value,
  onChange,
  disabled,
  ...rest
}) {
  return (
    <input
      type={type}
      name={name}
      id={name}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      autoFocus={type === "search"}
      className={`${width} ${customStyle} text-[16px] outline-none placeholder:text-xs`}
      spellCheck={type === "search"}
      aria-label={type === "search" ? "Search through site content" : undefined}
      disabled={disabled}
      {...rest}
    />
  );
}

export default Input;
