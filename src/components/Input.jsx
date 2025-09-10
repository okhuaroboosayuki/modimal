function Input({ type, name, placeholder, width, customStyle }) {
  return (
    <input
      type={type}
      name={name}
      id={name}
      placeholder={placeholder}
      className={`${width} ${customStyle} border-none text-[16px] outline-none placeholder:text-xs`}
      spellCheck={type === "search" && "true"}
      aria-label={type === "search" && "Search through site content"}
    />
  );
}

export default Input;
