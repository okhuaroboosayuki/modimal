import { useDispatch, useSelector } from "react-redux";
import CheckBox from "../CheckBox";
import {
  addEDD,
  clearEDD,
  clearGuaranteedDate,
  setGuaranteedDate,
} from "../../features/cart/checkoutSlice";
import { formatCurrency } from "../../utils/numberFormatter";

function GuaranteedDate({ dates, guaranteedDate }) {
  const dispatch = useDispatch();
  const { guaranteedDelivery, expectedDeliveryDate } = useSelector(
    (store) => store.checkoutReducer,
  );

  const handleClick = () => {
    if (guaranteedDelivery.date) {
      dispatch(clearGuaranteedDate());
      dispatch(clearEDD());
      return;
    }

    if (expectedDeliveryDate) {
      dispatch(clearEDD());
      dispatch(addEDD(dates[0]));
      dispatch(setGuaranteedDate(dates[0]));
      return;
    }

    dispatch(addEDD(dates[0]));
    dispatch(setGuaranteedDate(dates[0]));
  };

  return (
    <div className="text-neutral-black flex w-full flex-col items-start justify-between gap-3 sm:flex-row sm:items-center">
      <span className="text-gray86 w-full text-base font-medium sm:w-1/3">
        guaranteed by:
      </span>

      <div className="flex items-center gap-3 max-sm:w-full max-sm:justify-between">
        <CheckBox
          label={guaranteedDate}
          isChecked={typeof expectedDeliveryDate !== "object"}
          handleChange={handleClick}
          className={"[&>span]:text-sm!"}
          shape="round"
        />

        <span className="text-base font-semibold text-black">
          {formatCurrency(guaranteedDelivery.cost, 0)}
        </span>
      </div>
    </div>
  );
}

export default GuaranteedDate;
