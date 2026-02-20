function Button({ children, clickHandler, styles, isDisabled }) {
  return (
    <button
      className={`${styles} border-primary-100 transition-500-in-out cursor-pointer border p-4 text-sm capitalize`}
      onClick={clickHandler}
      disabled={isDisabled}
    >
      {children}
    </button>
  );
}

export default Button;
