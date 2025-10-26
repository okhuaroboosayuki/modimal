function Button({ text, clickHandler, styles }) {
  return (
    <button
      className={`${styles} border-primary-100 cursor-pointer border p-4 text-sm capitalize`}
      onClick={clickHandler}
    >
      {text}
    </button>
  );
}

export default Button;
