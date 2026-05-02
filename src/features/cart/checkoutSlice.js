import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  shippingDetails: null,
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
  },
});

export const { setShippingDetails, clearShippingDetails } =
  checkoutSlice.actions;
export default checkoutSlice.reducer;
