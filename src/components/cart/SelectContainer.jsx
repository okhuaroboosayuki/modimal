import { useCheckoutForm } from "../../hooks/useCheckoutForm";

function SelectContainer({ children, disabled, error, type }) {
  const { watch } = useCheckoutForm();

  const selectedCountry = watch("country");

  return (
    <div className="relative flex h-full w-full flex-col gap-1">
      <div
        className={`${disabled ? "border-grayCB cursor-not-allowed" : error ? "border-error" : "border-gray60 focus-within:border-primary-300"} ${type === "state" && !selectedCountry ? "border-grayCB cursor-not-allowed" : "cursor-pointer"} flex h-[42px] w-full items-center gap-2 border px-4 py-1.5`}
      >
        {children}
      </div>

      {error && <span className="text-error text-xs">{error}</span>}
    </div>
  );
}

export default SelectContainer;
