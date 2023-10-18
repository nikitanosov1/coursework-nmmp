import { createSlice } from "@reduxjs/toolkit";

interface ITheme {
  darkTheme: boolean;
}

const initialState: ITheme = {
  darkTheme: true,
};

export const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    toggleTheme: (state) => {
      state.darkTheme = !state.darkTheme;
    },
  },
});

export const themeReducer = themeSlice.reducer;
export const themeActions = themeSlice.actions;
