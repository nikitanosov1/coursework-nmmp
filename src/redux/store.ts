import { configureStore } from "@reduxjs/toolkit";
import { graphSettingsReducer } from "@/redux/features/graphSettings";
import { themeReducer } from "./features/theme";
import { graphResultsReducer } from "./features/graphResult";

export const store = configureStore({
  reducer: {
    graphSettings: graphSettingsReducer,
    graphResults: graphResultsReducer,
    theme: themeReducer,
  },
  devTools: process.env.NODE_ENV !== "production",
});
