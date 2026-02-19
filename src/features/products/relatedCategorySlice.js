import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  relatedCategory: [],
};

const relatedCategorySlice = createSlice({
  name: "relatedCategory",
  initialState,
  reducers: {
    setRelatedCategory: (state, action) => {
      state.relatedCategory = action.payload;
    },
    clearRelatedCategory: (state) => {
      state.relatedCategory = [];
    },
  },
});

export const { setRelatedCategory, clearRelatedCategory } =
  relatedCategorySlice.actions;
export default relatedCategorySlice.reducer;
