import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  searchQueryState: "",
};

const searchSlice = createSlice({
  name: "search",
  initialState,
  reducers: {
    setSearchQueryState: (state, action) => {
      state.searchQueryState = action.payload;
    },
    clearSearchQuerySate: (state) => {
      state.searchQueryState = "";
    },
  },
});

export const { setSearchQueryState, clearSearchQuerySate } =
  searchSlice.actions;
export default searchSlice.reducer;
