import { useAnalyticalSolutionGraph } from "@/hooks/useAnalyticalSolutionGraph";
import { useCustomExplicit } from "@/hooks/useCustomExplicit";
import { useCustomExplicitRunge } from "@/hooks/useCustomExplicitRunge";
import { useMergeGraphs } from "@/hooks/useMergeGraphs";
import { useSchemaSolutionGraph } from "@/hooks/useSchemaSolutionGraph";
import { graphResultsActions } from "@/redux/features/graphResult";
import {
  selectBigK,
  selectI,
  selectK,
  selectSchemaName,
} from "@/redux/features/graphSettings/selector";
import { selectIsDarkTheme } from "@/redux/features/theme/selector";
import { Stack } from "@mui/material";
import React, { useEffect, useState } from "react";
import Skeleton from "react-loading-skeleton";
import { useDispatch, useSelector } from "react-redux";

import {
  CartesianGrid,
  Line,
  LineChart,
  XAxis,
  Tooltip,
  YAxis,
  Legend,
} from "recharts";

export const Graph = () => {
  const dispatch = useDispatch();
  const isDarkTheme = useSelector(selectIsDarkTheme);
  const schemaName = useSelector(selectSchemaName);
  const K = useSelector(selectBigK);
  const I = useSelector(selectI);
  const k = useSelector(selectK);
  const [isSSR, setIsSSR] = useState(true);
  useEffect(() => {
    setIsSSR(false);
  }, []);

  const labelsColor = isDarkTheme ? "#FFFFFF" : "#11111";
  const analyticalSolutionGraph = useAnalyticalSolutionGraph({ I, K, k });
  const { schemaSolutionGraph, SCHEMA_LABEL, workTime } =
    useSchemaSolutionGraph({
      schemaName,
      I,
      K,
      k,
    });

  useEffect(() => {
    dispatch(graphResultsActions.setworkTime(workTime));
  }, [schemaName, workTime, dispatch]);

  const [explicitCustomSolutionGraph1, SCHEMA_LABEL1, workTime1] =
    useCustomExplicit({
      label: "K = 500",
      I: 16,
      K: 500,
      k: 500,
    });

  const [explicitCustomSolutionGraph2, SCHEMA_LABEL2, workTime2] =
    useCustomExplicit({
      label: "K = 1000",
      I: 16,
      K: 1000,
      k: 1000,
    });
  const [explicitRungeCustomSolutionGraph, SCHEMA_LABEL3, workTime3] =
    useCustomExplicitRunge({
      label: "Рунге K = 1000",
      I: 16,
      K: 1000,
      k: 1000,
    });

  const mergedGraph = useMergeGraphs(
    "r",
    analyticalSolutionGraph,
    explicitCustomSolutionGraph1,
    explicitCustomSolutionGraph2,
    explicitRungeCustomSolutionGraph
  );

  useEffect(() => {
    const initialValue = 0;
    if (!mergedGraph) return;

    const inaccuracy = mergedGraph.reduce((accumulator, currentValue) => {
      return Math.max(
        accumulator,
        Math.abs(
          currentValue["Аналитическое решение"] -
            currentValue[`${SCHEMA_LABEL}`]
        )
      );
    }, initialValue);
    dispatch(graphResultsActions.setInaccuracy(inaccuracy));
  }, [mergedGraph, schemaName, I, K, k, SCHEMA_LABEL, dispatch]);

  return (
    <Stack width={1200}>
      {isSSR ? (
        <Skeleton
          width={1200}
          height={600}
          baseColor="#202020"
          highlightColor="#444"
        />
      ) : (
        <LineChart syncMethod={'value'} syncId="anyId" width={1200} height={600} data={mergedGraph}>
          <CartesianGrid stroke="#ccc" strokeDasharray="2 2"></CartesianGrid>
          <XAxis
            tick={{ fill: labelsColor }}
            type="number"
            domain={["dataMin", "dataMax"]}
            tickCount={20}
            dataKey="r"
            style={{
              fontSize: 10,
            }}
            label={{
              fill: labelsColor,
              value: "Радиус r",
              position: "bottom",
              fontSize: 20,
              offset: 3,
            }}
          ></XAxis>
          <YAxis
            style={{
              fontSize: 18,
            }}
            tick={{ fill: labelsColor }}
            width={150}
            label={{
              fontSize: 20,
              fill: labelsColor,
              value: "Температура U(r, t)",
              angle: -90,
            }}
          ></YAxis>
          <Tooltip></Tooltip>
          <Legend
            wrapperStyle={{
              fontSize: 20,
              paddingTop: "40px",
            }}
          ></Legend>

          {/* Line (график) аналитического решения */}
          <Line
            key="Аналитическое решение"
            type="monotone"
            dataKey="Аналитическое решение"
            stroke="red"
            strokeWidth="3"
            dot={{ fill: "#2e4355", stroke: "#8884d8", strokeWidth: 2, r: 0 }}
            activeDot={{
              fill: "#2e4355",
              stroke: "#8884d8",
              strokeWidth: 5,
              r: 2,
            }}
          />

          {/* Line (график) решения с помощью разностной схемы*/}
          <Line
            key={`${SCHEMA_LABEL1}`}
            dataKey={`${SCHEMA_LABEL1}`}
            type = "monotoneX"
            stroke="green"
            strokeWidth="3"
            dot={{ fill: "#2e4355", stroke: "#8884d8", strokeWidth: 2, r: 0 }}
            activeDot={{
              fill: "#2e4355",
              stroke: "#8884d8",
              strokeWidth: 5,
              r: 2,
            }}
          />
          <Line
            key={`${SCHEMA_LABEL2}`}
            dataKey={`${SCHEMA_LABEL2}`}
            type = "monotoneX"
            stroke="purple"
            strokeWidth="3"
            dot={{ fill: "#2e4355", stroke: "#8884d8", strokeWidth: 2, r: 0 }}
            activeDot={{
              fill: "#2e4355",
              stroke: "#8884d8",
              strokeWidth: 5,
              r: 2,
            }}
          />
          <Line
            key={`${SCHEMA_LABEL3}`}
            dataKey={`${SCHEMA_LABEL3}`}
            type = "monotoneX"
            stroke="brown"
            strokeWidth="3"
            dot={{ fill: "#2e4355", stroke: "#8884d8", strokeWidth: 2, r: 0 }}
            activeDot={{
              fill: "#2e4355",
              stroke: "#8884d8",
              strokeWidth: 5,
              r: 2,
            }}
          />
        </LineChart>
      )}
    </Stack>
  );
};
