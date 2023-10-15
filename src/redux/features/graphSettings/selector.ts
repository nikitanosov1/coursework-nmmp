const selectGraphSettingsModule = (state: any) => state.graphSettings;

export const selectSchemaName = (state: any) =>
  selectGraphSettingsModule(state).schemaName;

export const selectBigK = (state: any) => selectGraphSettingsModule(state).K;

export const selectK = (state: any) => selectGraphSettingsModule(state).k;

export const selectI = (state: any) => selectGraphSettingsModule(state).I;
