const selectGraphResultsModule = (state: any) => state.graphResults;

export const selectWorkTime = (state: any) =>
  selectGraphResultsModule(state).workTime;

export const selectInaccuracy = (state: any) =>
  selectGraphResultsModule(state).inaccuracy;
