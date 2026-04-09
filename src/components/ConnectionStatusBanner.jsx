function ConnectionStatusBanner() {
  return (
    <div className="flex h-screen w-full items-start justify-center px-5">
      <div className="bg-warning rounded-lg px-8 py-6 text-center text-white shadow-lg">
        <div className="flex flex-col items-center gap-4">
          <svg
            className="h-16 w-16"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M18.364 5.636a9 9 0 010 12.728m0 0l-2.829-2.829m2.829 2.829L21 21M15.536 8.464a5 5 0 010 7.072m0 0l-2.829-2.829m-4.243 2.829a4.978 4.978 0 01-1.414-2.83m-1.414 5.658a9 9 0 01-2.167-9.238m7.824 2.167a1 1 0 111.414 1.414m-1.414-1.414L3 3m8.293 8.293l1.414 1.414"
            />
          </svg>
          <p className="text-xl font-semibold">No internet connection </p>

          <p className="text-sm opacity-90">
            Please check your internet connection and try again
          </p>
        </div>
      </div>
    </div>
  );
}

export default ConnectionStatusBanner;
