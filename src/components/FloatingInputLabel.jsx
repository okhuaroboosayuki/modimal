function FloatingInputLabel({ name, isFloating, placeholder, error }) {
  return (
    <label
      htmlFor={name}
      className={`transition-500-in-out pointer-events-none absolute left-4 px-1 text-xs ${isFloating ? "text-primary-300 top-0 -translate-y-1/2 bg-white text-xs font-semibold" : `text-gray60 ${error ? "top-1/3" : "top-1/2"} -translate-y-1/2 text-sm`} `}
    >
      {placeholder}
    </label>
  );
}

export default FloatingInputLabel;
