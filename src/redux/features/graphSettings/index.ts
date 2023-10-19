import { ESchemaName } from "@/types/graph";
import { createSlice } from "@reduxjs/toolkit";

interface IGraphSettings {
  I: number;
  K: number;
  k: number; // Номер временного слоя
  schemaName: ESchemaName;
}

const initialState: IGraphSettings = {
  I: 25,
  K: 5000,
  k: 5000,
  schemaName: ESchemaName.KRANK_NICHOLSON,
};

const graphSettingsSlice = createSlice({
  name: "graphSettings",
  initialState,
  reducers: {
    setSchemaName: (state, { payload }) => {
      state.schemaName = payload;
    },
    setBigK: (state, { payload }) => {
      state.K = payload;
    },
    setK: (state, { payload }) => {
      state.k = payload;
    },
    setI: (state, { payload }) => {
      state.I = payload;
    },
  },
});

export const graphSettingsReducer = graphSettingsSlice.reducer;
export const graphSettingsActions = graphSettingsSlice.actions;
