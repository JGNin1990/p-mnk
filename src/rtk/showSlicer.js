import { createSlice } from "@reduxjs/toolkit";

const initialState = false;

const showSlicer = createSlice({
  name: "show",
  initialState,
  reducers: {
    showModel: (state) => {
      return (state = !state);
    },
  },
});

export const { showModel } = showSlicer.actions;
export default showSlicer.reducer;
