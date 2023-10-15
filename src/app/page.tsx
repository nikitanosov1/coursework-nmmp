"use client";

import { useState } from "react";
import styles from "./page.module.css";
import { Button, Theme } from "@mui/material";
import { darkTheme, lightTheme } from "@/config/theme";
import { ThemeProvider } from "@emotion/react";
import { Home } from "./home/page";

export default function App() {
  const [currentTheme, setCurrentTheme] = useState<Theme>(lightTheme);

  const toggleTheme = () => {
    setCurrentTheme((prevTheme) =>
      prevTheme === lightTheme ? darkTheme : lightTheme
    );
  };

  return (
    <ThemeProvider theme={currentTheme}>
      <Home />
      <button onClick={toggleTheme}>Toggle Theme</button>
    </ThemeProvider>
  );
}
