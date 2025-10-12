import { configureStore } from "@reduxjs/toolkit";
import filterReducer from "../features/filter/filterSlice";
import modalReducer from "../features/modal/modalSlice";

const store = configureStore({
  reducer: {
    productFilter: filterReducer,
    modalOpen: modalReducer,
  },
});

export default store;
