import { createSlice } from "@reduxjs/toolkit";

interface IGraphResults {
  workTime: number;
  inaccuracy: number;
}

const initialState: IGraphResults = {
  workTime: 0,
  inaccuracy: 0,
};

const graphResultsSlice = createSlice({
  name: "graphResults",
  initialState,
  reducers: {
    setworkTime: (state, { payload }) => {
      state.workTime = payload;
    },
    setInaccuracy: (state, { payload }) => {
      state.inaccuracy = payload;
    },
  },
});

export const graphResultsReducer = graphResultsSlice.reducer;
export const graphResultsActions = graphResultsSlice.actions;
