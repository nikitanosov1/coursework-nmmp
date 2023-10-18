import { SchemeUtil } from "@/util/scheme";

interface IProps {
  I: number;
  K: number;
  k: number; // Номер временного слоя
}

export const useExplicitSchemaSolutionGraph = ({ I, K, k }: IProps) => {
  const SCHEMA_LABEL = "Явная схема";
  const schemaSolutionGraph = [
    {
      r: 4000,
      [`${SCHEMA_LABEL}`]: 2400,
    },
    {
      r: 3000,
      [`${SCHEMA_LABEL}`]: 3210,
    },
    {
      r: 2000,
      [`${SCHEMA_LABEL}`]: 2290,
    },
    {
      r: 2780,
      [`${SCHEMA_LABEL}`]: 2000,
    },
    {
      r: 1890,
      [`${SCHEMA_LABEL}`]: 2181,
    },
    {
      r: 2390,
      [`${SCHEMA_LABEL}`]: 1500,
    },
    {
      r: 3490,
      [`${SCHEMA_LABEL}`]: 8100,
    },
  ];
  // ЖЕНЯ, ТЕБЕ ТУТ НУЖНО ВОЗВРАЩАТЬ НЕ ЗАХАРДКОЖЕННОЕ schemaSolutionGraph, а считать его по схеме
  return { schemaSolutionGraph, SCHEMA_LABEL };
};
