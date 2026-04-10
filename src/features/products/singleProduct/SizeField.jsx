import { Controller } from "react-hook-form";
import CustomSelect from "./CustomSelect";

function SizeField({ control, error, options, isOutOfStock, onSizeChange }) {
  return (
    <div className="flex w-full flex-col">
      <div className="flex w-full items-center justify-between">
        {error && (
          <span className="text-error w-full text-sm transition-all duration-200">
            {error.message}
          </span>
        )}

        <span className="text-gray86 w-full text-end capitalize">
          Size guide
        </span>
      </div>

      <Controller
        name="size"
        control={control}
        rules={{ required: "Select a size" }}
        render={({ field }) => (
          <div className="flex flex-col gap-1">
            <CustomSelect
              options={isOutOfStock ? [] : options}
              value={field.value ?? ""}
              onChange={(size) => {
                field.onChange(size);
                onSizeChange?.(size);
              }}
              error={error}
            />
          </div>
        )}
      />
    </div>
  );
}

export default SizeField;
