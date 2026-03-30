function Input({
  type,
  name,
  placeholder,
  width,
  customStyle,
  value,
  onChange,
  onBlur,
  onFocus,
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
      onBlur={onBlur}
      onFocus={onFocus}
      autoFocus={type === "search"}
      className={`${width} ${customStyle} text-base outline-none placeholder:text-xs`}
      spellCheck={type === "search"}
      aria-label={type === "search" ? "Search through site content" : undefined}
      disabled={disabled}
      {...rest}
    />
  );
}

export default Input;
