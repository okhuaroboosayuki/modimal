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
  inputMode,
  disabled,
  maxLength,
  ref,
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
      inputMode={inputMode}
      className={`${width} ${customStyle} text-base outline-none placeholder:text-xs placeholder:capitalize`}
      spellCheck={type === "search"}
      aria-label={type === "search" ? "Search through site content" : undefined}
      disabled={disabled}
      ref={ref}
      maxLength={maxLength}
      {...rest}
    />
  );
}

export default Input;
