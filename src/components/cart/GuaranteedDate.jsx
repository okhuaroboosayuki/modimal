import { useDispatch, useSelector } from "react-redux";
import { useCheckoutForm } from "../../hooks/useCheckoutForm";
import { formatDeliveryDates } from "../../utils/dateFormatters";
import CheckBox from "../CheckBox";
import {
  clearGuaranteedDate,
  setGuaranteedDate,
} from "../../features/cart/checkoutSlice";
import { formatCurrency } from "../../utils/numberFormatter";

function GuaranteedDate({ date }) {
  const { register, watch } = useCheckoutForm();
  const dispatch = useDispatch();
  const { guaranteedDelivery } = useSelector((store) => store.checkoutReducer);

  const tomorrow = formatDeliveryDates(date, false);
  const hasGuaranteedDate = watch("guaranteedDate", "");

  const handleClick = () => {
    if (hasGuaranteedDate) {
      dispatch(clearGuaranteedDate());
      return;
    }
    dispatch(setGuaranteedDate(date[0]));
  };

  return (
    <div className="text-neutral-black flex w-full flex-col items-start justify-between gap-3 sm:flex-row sm:items-center">
      <span className="text-gray86 w-full text-base font-medium sm:w-1/3">
        guaranteed by:
      </span>

      <div className="flex items-center gap-3 max-sm:w-full max-sm:justify-between">
        <div onClick={handleClick}>
          <CheckBox
            label={tomorrow}
            className={"[&>span]:text-sm!"}
            shape="round"
            {...register("guaranteedDate")}
          />
        </div>

        <span className="text-base font-semibold text-black">
          {formatCurrency(guaranteedDelivery.cost, 0)}
        </span>
      </div>
    </div>
  );
}

export default GuaranteedDate;
