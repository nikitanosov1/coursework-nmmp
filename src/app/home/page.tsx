import { Graph } from "@/components/Graph/Graph";
import { GraphSettings } from "@/components/GraphSettings/GraphSettings";
import { Button } from "@mui/material";
import React from "react";
import styles from "./page.module.css";

export const Home = () => {
  return (
    <main className={styles.main}>
      <Graph />
      <GraphSettings />
    </main>
  );
};
