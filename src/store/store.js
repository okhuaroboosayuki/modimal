import { configureStore } from "@reduxjs/toolkit";
import filterReducer from "../features/filter/filterSlice";
import modalReducer from "../features/modal/modalSlice";
import searchReducer from "../features/search/searchSlice";
import relatedCategoryReducer from "../features/products/relatedCategorySlice";
import checkoutReducer from "../features/cart/checkoutSlice";
import { saveCheckoutState } from "../utils/checkoutStorage";

const store = configureStore({
  reducer: {
    productFilter: filterReducer,
    modalOpen: modalReducer,
    searchReducer,
    relatedCategoryReducer,
    checkoutReducer,
  },
});

let previousCheckoutState = store.getState().checkoutReducer;

store.subscribe(() => {
  const currentCheckoutState = store.getState().checkoutReducer;

  if (currentCheckoutState === previousCheckoutState) return;

  saveCheckoutState(currentCheckoutState);
  previousCheckoutState = currentCheckoutState;
});

export default store;
