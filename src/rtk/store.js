import { configureStore } from "@reduxjs/toolkit";
import showSlicer from "./showSlicer";

export const store = configureStore({
  reducer: {
    show: showSlicer,
  },
});
