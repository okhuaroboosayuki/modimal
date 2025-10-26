import { configureStore } from "@reduxjs/toolkit";
import filterReducer from "../features/filter/filterSlice";
import modalReducer from "../features/modal/modalSlice";
import searchReducer from "../features/search/searchSlice";

const store = configureStore({
  reducer: {
    productFilter: filterReducer,
    modalOpen: modalReducer,
    searchReducer,
  },
});

export default store;
