import { useAnalyticalSolutionGraph } from "@/hooks/useAnalyticalSolutionGraph";
import { useMergeTwoGraphsByField } from "@/hooks/useMergeTwoGraphsByField";
import { useSchemaSolutionGraph } from "@/hooks/useSchemaSolutionGraph";
import {
  selectBigK,
  selectI,
  selectK,
  selectSchemaName,
} from "@/redux/features/graphSettings/selector";
import { ESchemaName } from "@/types/graph";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
// import { ExplicitGraph } from "../ExplicitGraph/ExplicitGraph";
// import { ImplicitGraph } from "../ImplicitGraph/ImplicitGraph";
// import { KrankNicholsonGraph } from "../KrankNicholsonGraph/KrankNicholsonGraph";
import {
  CartesianGrid,
  Line,
  LineChart,
  XAxis,
  Tooltip,
  YAxis,
  Legend,
  ResponsiveContainer,
} from "recharts";

const data = [
  {
    name: "Page A",
    r: 4000,
    "Явная схема": 2400,
    "Аналитическое решение": 2400,
  },
  {
    name: "Page B",
    r: 3000,
    "Явная схема": 1398,
    "Аналитическое решение": 2210,
  },
  {
    name: "Page C",
    r: 2000,
    "Явная схема": 9800,
    "Аналитическое решение": 2290,
  },
  {
    name: "Page D",
    r: 2780,
    "Явная схема": 3908,
    "Аналитическое решение": 2000,
  },
  {
    name: "Page E",
    r: 1890,
    "Явная схема": 4800,
    "Аналитическое решение": 2181,
  },
  {
    name: "Page F",
    r: 2390,
    "Явная схема": 3800,
    "Аналитическое решение": 2500,
  },
  {
    name: "Page G",
    r: 3490,
    "Явная схема": 4300,
    "Аналитическое решение": 2100,
  },
];

export const Graph = () => {
  const schemaName = useSelector(selectSchemaName);
  const K = useSelector(selectBigK);
  const I = useSelector(selectI);
  const k = useSelector(selectK);

  const analyticalSolutionGraph = useAnalyticalSolutionGraph();
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

  console.log(schemaSolutionGraph);
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
            dataKey="r"
            style={{
              fontSize: 18,
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
            key="2343r343f34f"
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
            key="23432434"
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
