import { configureStore } from "@reduxjs/toolkit";
import { graphSettingsReducer } from "@/redux/features/graphSettings";

export const store = configureStore({
  reducer: {
    graphSettings: graphSettingsReducer,
  },
  devTools: process.env.NODE_ENV !== "production",
});
