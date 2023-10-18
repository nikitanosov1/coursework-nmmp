import { useAnalyticalSolutionGraph } from "@/hooks/useAnalyticalSolutionGraph";
import { useMergeTwoGraphsByField } from "@/hooks/useMergeTwoGraphsByField";
import { useSchemaSolutionGraph } from "@/hooks/useSchemaSolutionGraph";
import {
  selectBigK,
  selectI,
  selectK,
  selectSchemaName,
} from "@/redux/features/graphSettings/selector";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

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
  const schemaName = useSelector(selectSchemaName);
  const K = useSelector(selectBigK);
  const I = useSelector(selectI);
  const k = useSelector(selectK);

  const analyticalSolutionGraph = useAnalyticalSolutionGraph({ I, K, k });
  const { schemaSolutionGraph, SCHEMA_LABEL } = useSchemaSolutionGraph({
    schemaName,
    I,
    K,
    k,
  });

  const mergedGraph = useMergeTwoGraphsByField(
    "r",
    analyticalSolutionGraph,
    schemaSolutionGraph
  );

  const [isSSR, setIsSSR] = useState(true);
  useEffect(() => {
    setIsSSR(false);
  }, []);

  return (
    <div>
      {!isSSR && (
        <LineChart syncId="anyId" width={1200} height={600} data={mergedGraph}>
          <CartesianGrid stroke="#ccc" strokeDasharray="2 2"></CartesianGrid>
          <XAxis
            tick={{ fill: "#FFFFFF" }}
            type="number"
            domain={["dataMin", "dataMax"]}
            tickCount={40}
            dataKey="r"
            style={{
              fontSize: 10,
            }}
            label={{
              fill: "#FFFFFF",
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
            tick={{ fill: "#FFFFFF" }}
            width={150}
            label={{
              fontSize: 20,
              fill: "#FFFFFF",
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
            key={`${SCHEMA_LABEL}`}
            type="monotone"
            dataKey={`${SCHEMA_LABEL}`}
            stroke="gray"
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
    </div>
  );
};
