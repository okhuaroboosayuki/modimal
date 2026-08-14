import { formatCurrency } from "../../utils/numberFormatter";
import ColorWidget from "../ColorWidget";
import { ProgressLink } from "../ProgressLinks";

function ProductCardDetails({ id, productName, productTag, colors, price }) {
  return (
    <div className="flex w-full items-start justify-between text-sm sm:text-base">
      <div className="flex w-full flex-col items-start gap-2">
        <div className="flex w-full flex-col justify-between sm:flex-row">
          <div className="flex w-full flex-col items-start gap-2">
            <ProgressLink
              to={`/product/${id}`}
              className="font-semibold capitalize"
            >
              {productName}
            </ProgressLink>

            <p className="font-light">{productTag}</p>
          </div>

          <span className="self-end font-semibold">
            {formatCurrency(price, 0)}
          </span>
        </div>

        <div className="flex items-center gap-2">
          {colors.map((color) => (
            <ColorWidget key={color} color={color} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default ProductCardDetails;
