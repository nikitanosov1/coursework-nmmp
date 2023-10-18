"use client";

import { Graph } from "@/components/Graph/Graph";
import { GraphSettings } from "@/components/GraphSettings/GraphSettings";
import { Stack } from "@mui/material";
import React from "react";
import styles from "./page.module.css";

export const Home = () => {
  return (
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
        </Stack>
      </Stack>
    </Stack>
  );
};
