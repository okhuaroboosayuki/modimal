import { configureStore } from "@reduxjs/toolkit";
import filterReducer from "../features/filter/filterSlice";
import modalReducer from "../features/modal/modalSlice";
import searchReducer from "../features/search/searchSlice";
import relatedCategoryReducer from "../features/products/relatedCategorySlice";
import checkoutReducer from "../features/cart/checkoutSlice";

const store = configureStore({
  reducer: {
    productFilter: filterReducer,
    modalOpen: modalReducer,
    searchReducer,
    relatedCategoryReducer,
    checkoutReducer,
  },
});

export default store;
