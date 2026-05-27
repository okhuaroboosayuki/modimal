import { createSlice } from "@reduxjs/toolkit";
import { loadCheckoutState } from "../../utils/checkoutStorage";

const defaultState = {
  shippingDetails: null,
  expectedDeliveryDate: null,
  guaranteedDelivery: {
    date: null,
    cost: 2000,
  },
  deliveryAddress: null,
  totalAmount: 0,
};
const initialState = loadCheckoutState(defaultState);

const checkoutSlice = createSlice({
  name: "checkout",
  initialState,
  reducers: {
    setShippingDetails(state, action) {
      state.shippingDetails = action.payload;
    },
    clearShippingDetails(state) {
      state.shippingDetails = null;
    },
    addEDD(state, action) {
      state.expectedDeliveryDate = action.payload;
    },
    clearEDD(state) {
      state.expectedDeliveryDate = null;
    },
    setGuaranteedDate(state, action) {
      state.guaranteedDelivery.date = action.payload;
    },
    clearGuaranteedDate(state) {
      state.guaranteedDelivery.date = null;
    },
    setTotalAmount(state, action) {
      state.totalAmount = action.payload;
    },
    clearState(state) {
      state.shippingDetails = null;
      state.expectedDeliveryDate = null;
      state.guaranteedDelivery.date = null;
      state.deliveryAddress = null;
      state.totalAmount = 0;
    },
  },
});

export const {
  setShippingDetails,
  clearShippingDetails,
  addEDD,
  clearEDD,
  setGuaranteedDate,
  clearGuaranteedDate,
  setTotalAmount,
  clearState,
} = checkoutSlice.actions;
export default checkoutSlice.reducer;
