function ErrorFallBack({ error, resetErrorBoundary }) {
  return (
    <section className="flex h-screen w-full items-center justify-center capitalize">
      <div className="flex flex-col items-center justify-center gap-6 px-3">
        <h1 className="text-error-light text-2xl font-bold uppercase">
          Something went wrong
        </h1>

        <p className="text-error text-center italic">{error.message}</p>

        <button
          onClick={resetErrorBoundary}
          className="bg-success-bg hover:bg-success transition-500-in-out cursor-pointer border p-3 uppercase hover:text-white"
        >
          try again
        </button>
      </div>
    </section>
  );
}

export default ErrorFallBack;
