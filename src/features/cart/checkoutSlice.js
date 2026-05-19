import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  shippingDetails: null,
  expectedDeliveryDate: null,
  guaranteedDelivery: {
    date: null,
    cost: 2000,
  },
};

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
    clearDates(state) {
      state.expectedDeliveryDate = null;
      state.guaranteedDelivery.date = null;
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
  clearDates,
} = checkoutSlice.actions;
export default checkoutSlice.reducer;
