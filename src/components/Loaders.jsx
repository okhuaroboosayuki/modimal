export function LoadingSpinner() {
  return (
    <div className="flex w-full items-center justify-center">
      <div class="lds-ring">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
}

export function PageLoader() {
  return <div>loading...</div>;
}
