import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isModalOpen: false,
};

const modalSlice = createSlice({
  name: "modal",
  initialState,
  reducers: {
    setModalOpen: (state) => {
      state.isModalOpen = !state.isModalOpen;
    },
    setCloseModal: (state) => {
      state.isModalOpen = false;
    },
  },
});

export const { setModalOpen, setCloseModal } = modalSlice.actions;

export default modalSlice.reducer;
