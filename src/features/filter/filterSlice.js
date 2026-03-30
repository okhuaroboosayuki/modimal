import { createSelector, createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [],
  filteredList: [],
};

const filterSlice = createSlice({
  name: "filters",
  initialState,
  reducers: {
    setProducts: (state, action) => {
      state.products = action.payload;
    },
    addToFilteredList: {
      prepare(paramName, paramValue) {
        return {
          payload: { paramName, paramValue },
        };
      },

      reducer(state, action) {
        state.filteredList = [
          ...state.filteredList,
          { [action.payload.paramName]: action.payload.paramValue },
        ];
      },
    },
    removeFromFilteredList: (state, action) => {
      state.filteredList = state.filteredList.filter(
        (item) => !Object.prototype.hasOwnProperty.call(item, action.payload),
      );
    },
    clearFilteredList: (state) => {
      state.filteredList = [];
    },
  },
});

export const {
  setProducts,
  addToFilteredList,
  removeFromFilteredList,
  clearFilteredList,
} = filterSlice.actions;
export default filterSlice.reducer;

const selectProducts = (state) => state.productFilter.products;

export const selectColors = createSelector(selectProducts, (products) =>
  Array.from(new Set(products.flatMap((p) => p.availableColors ?? []))).map(
    (color) => ({ value: color, label: color }),
  ),
);

export const selectFabrics = createSelector(selectProducts, (products) =>
  products.reduce((acc, product) => {
    const type = product.fabricDetails?.type;
    if (type && !acc.some((opt) => opt.value === type)) {
      acc.push({ value: type, label: type });
    }
    return acc;
  }, []),
);
