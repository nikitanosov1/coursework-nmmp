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
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: "Page B",
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: "Page C",
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: "Page D",
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: "Page E",
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: "Page F",
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    name: "Page G",
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
];

export const Graph = () => {
  const schemaName = useSelector(selectSchemaName);
  const K = useSelector(selectBigK);
  const I = useSelector(selectI);
  const k = useSelector(selectK);

  const [isSSR, setIsSSR] = useState(true);

  useEffect(() => {
    setIsSSR(false);
  }, []);

  return (
    <div
      style={
        {
          // backgroundColor: "gray",
        }
      }
    >
      {/* FIRST GRAPH */}
      {!isSSR && (
        <LineChart syncId="anyId" width={1200} height={600} data={data}>
          <CartesianGrid stroke="#ccc" strokeDasharray="2 2"></CartesianGrid>
          <XAxis
            tick={{ fill: "#FFFFFF" }}
            dataKey="uv"
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

          <Line
            key="2343r343f34f"
            type="monotone"
            dataKey="amt"
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
        </LineChart>
      )}
    </div>
  );
};
