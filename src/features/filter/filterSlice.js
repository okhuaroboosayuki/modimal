import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  colors: [],
  fabrics: [],
  filteredList: [],
};

const filterSlice = createSlice({
  name: "filters",
  initialState,
  reducers: {
    setProducts: (state, action) => {
      state.colors = Array.from(
        new Set(
          action.payload.data.flatMap((product) => product.availableColors),
        ),
      ).map((color) => ({
        value: color,
        label: color,
      }));

      state.fabrics = action.payload.data.reduce((acc, product) => {
        const type = product.fabricDetails.type;
        if (!acc.some((opt) => opt.value === type)) {
          acc.push({ value: type, label: type });
        }
        return acc;
      }, []);
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
