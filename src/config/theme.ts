import { createTheme } from "@mui/material/styles";

export const lightTheme = createTheme({
  palette: {
    mode: "light",
    background: {
      paper: "#f2f2f2",
    },
    text: {
      primary: "#11111",
    },
  },
});

export const darkTheme = createTheme({
  palette: {
    mode: "dark",
    background: {
      paper: "#222",
    },
    text: {
      primary: "#fff",
    },
  },
});
// export const lightTheme = createTheme({
//   palette: {
//     mode: "light",
//     primary: {
//       main: "#007bff",
//     },
//     secondary: {
//       main: "#6c757d",
//     },
//   },
// });

// export const darkTheme = createTheme({
//   palette: {
//     mode: "dark",
//     primary: {
//       main: "#8b00ff",
//     },
//     secondary: {
//       main: "#7366bd",
//     },
//   },
// });
