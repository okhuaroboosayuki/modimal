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
  orderNumber: null,
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
    setOrderNumber(state, action) {
      state.orderNumber = action.payload;
    },
    clearOrderNumber(state) {
      state.orderNumber = null;
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
  setOrderNumber,
  clearOrderNumber,
  clearState,
} = checkoutSlice.actions;
export default checkoutSlice.reducer;
