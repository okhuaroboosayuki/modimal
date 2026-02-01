export function LoadingSpinner() {
  return (
    <div className="flex w-full items-center justify-center">
      <div className="lds-ring">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
}

export function PageLoader() {
  const brandName = "modimal".split("");

  return (
    <div className="flex h-screen w-full items-center justify-center">
      {brandName.map((char, index) => (
        <span
          key={index}
          className="text-primary animate-wave inline-block text-3xl font-bold"
          style={{ animationDelay: `${index * 0.1}s` }}
        >
          {char}
        </span>
      ))}
    </div>
  );
}

export function SmallLoader() {
  return (
    <div className="flex h-full w-full items-center justify-center">
      <div className="small-loader">
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
}
