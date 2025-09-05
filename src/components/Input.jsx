function Input({ type, name, placeholder, width }) {
  return (
    <input
      type={type}
      name={name}
      id={name}
      placeholder={placeholder}
      className={`${width} border-none text-sm outline-none placeholder:text-xs`}
    />
  );
}

export default Input;
