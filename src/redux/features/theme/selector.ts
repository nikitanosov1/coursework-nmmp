const selectThemeModule = (state: any) => state.theme;

export const selectIsDarkTheme = (state: any) =>
  selectThemeModule(state).darkTheme;
