import { Controller } from "react-hook-form";
import ColorWidget from "../../../components/ColorWidget";

function ColorField({ colors, control, error, isOutOfStock, onColorChange }) {
  return (
    <section className="flex flex-col items-start gap-6">
      <div className="flex items-center gap-1">
        <span className="font-normal">Colors</span>
        {error && <span className="text-error text-sm">*{error.message}*</span>}
      </div>

      <Controller
        name="color"
        control={control}
        rules={{ required: "Select a color" }}
        render={({ field }) => (
          <div className="flex gap-2">
            {colors?.map((color) => (
              <ColorWidget
                key={color}
                color={color}
                isSelected={field.value === color}
                onSelect={
                  !isOutOfStock
                    ? () => {
                        field.onChange(color);
                        onColorChange?.(color);
                      }
                    : undefined
                }
                cursor={"cursor-pointer"}
              />
            ))}
          </div>
        )}
      />
    </section>
  );
}

export default ColorField;
