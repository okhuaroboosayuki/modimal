import { configureStore } from "@reduxjs/toolkit";
import filterReducer from "../features/filter/filterSlice";
import modalReducer from "../features/modal/modalSlice";
import searchReducer from "../features/search/searchSlice";
import relatedCategoryReducer from "../features/products/relatedCategorySlice";

const store = configureStore({
  reducer: {
    productFilter: filterReducer,
    modalOpen: modalReducer,
    searchReducer,
    relatedCategoryReducer,
  },
});

export default store;
