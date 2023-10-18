import { configureStore } from "@reduxjs/toolkit";
import { graphSettingsReducer } from "@/redux/features/graphSettings";
import { themeReducer } from "./features/theme";

export const store = configureStore({
  reducer: {
    graphSettings: graphSettingsReducer,
    theme: themeReducer,
  },
  devTools: process.env.NODE_ENV !== "production",
});
