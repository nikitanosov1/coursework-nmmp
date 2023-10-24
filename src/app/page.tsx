"use client";

import styles from "./page.module.css";
import {
  FormControlLabel,
  FormGroup,
  Stack,
  Switch,
  Typography,
} from "@mui/material";
import { darkTheme, lightTheme } from "@/config/theme";
import { ThemeProvider } from "@emotion/react";
import { selectIsDarkTheme } from "@/redux/features/theme/selector";
import { useDispatch, useSelector } from "react-redux";
import { themeActions } from "@/redux/features/theme";
import { Graph } from "@/components/Graph/Graph";
import { GraphSettings } from "@/components/GraphSettings/GraphSettings";
import { WorkTimeOutput } from "@/components/WorkTimeOutput/WorkTimeOutput";
import { InaccuracyOutput } from "@/components/InaccuracyOutput/InaccuracyOutput";

export default function App() {
  const isDarkTheme = useSelector(selectIsDarkTheme);
  const dispatch = useDispatch();

  return (
    <ThemeProvider theme={isDarkTheme ? darkTheme : lightTheme}>
      <Stack
        sx={(theme) => ({
          backgroundColor: theme.palette.background.paper,
        })}
        className={styles.main}
        flexDirection="row"
        alignItems="center"
        justifyContent="center"
      >
        <Stack flexDirection="row" justifyContent="space-between" gap={2}>
          <Graph />
          <Stack pt="6px">
            <GraphSettings />
            <Stack pt={2} direction="column" gap={1}>
              <WorkTimeOutput />
              <InaccuracyOutput />
            </Stack>
          </Stack>
        </Stack>
      </Stack>
      <div
        style={{
          position: "absolute",
          top: "10px",
          right: "10px",
        }}
      >
        <FormGroup>
          <FormControlLabel
            control={
              <Switch
                checked={isDarkTheme}
                onChange={() => dispatch(themeActions.toggleTheme())}
              />
            }
            label={
              <Typography
                sx={(theme) => ({
                  color: theme.palette.text.primary,
                })}
              >
                Ночной режим
              </Typography>
            }
          />
        </FormGroup>
      </div>
    </ThemeProvider>
  );
}
