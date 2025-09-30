import { configureStore } from "@reduxjs/toolkit";
import filterReducer from "../features/products/filterSlice";

const store = configureStore({
  reducer: {
    productFilter: filterReducer,
  },
});

export default store;
