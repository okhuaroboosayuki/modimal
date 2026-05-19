import { useDispatch, useSelector } from "react-redux";
import {
  addEDD,
  clearEDD,
  clearGuaranteedDate,
} from "../../features/cart/checkoutSlice";
import CheckBox from "../CheckBox";

function ExpectedDates({ dates, formattedDates }) {
  const dispatch = useDispatch();
  const { guaranteedDelivery, expectedDeliveryDate } = useSelector(
    (store) => store.checkoutReducer,
  );

  const handleClick = () => {
    if (guaranteedDelivery.date && expectedDeliveryDate) {
      dispatch(clearGuaranteedDate());
      dispatch(clearEDD());
      dispatch(addEDD(dates));
      return;
    }

    if (expectedDeliveryDate) {
      dispatch(clearEDD());
      return;
    }

    dispatch(addEDD(dates));
  };

  return (
    <div className="flex w-full flex-col items-start justify-between gap-3 sm:flex-row sm:items-center">
      <span className="text-gray86 w-full text-base font-medium sm:w-fit">
        expected date:
      </span>

      <CheckBox
        label={formattedDates}
        isChecked={
          typeof expectedDeliveryDate === "object" && expectedDeliveryDate
        }
        handleChange={handleClick}
        className={"text-neutral-black! [&>span]:text-sm!"}
        shape="round"
      />
    </div>
  );
}

export default ExpectedDates;
