import { SchemeUtil } from "@/util/scheme";

interface IProps {
  I: number;
  K: number;
  k: number; // Номер временного слоя
}

export const useKrankNicholsonSolutionGraph = ({ I, K, k }: IProps) => {
  const SCHEMA_LABEL = "Схема Кранка-Николсона";
  const schemaSolutionGraph = [
    {
      r: 4000,
      [`${SCHEMA_LABEL}`]: 2400,
    },
    {
      r: 3000,
      [`${SCHEMA_LABEL}`]: 9210,
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
      [`${SCHEMA_LABEL}`]: 5181,
    },
    {
      r: 2390,
      [`${SCHEMA_LABEL}`]: 2500,
    },
    {
      r: 3490,
      [`${SCHEMA_LABEL}`]: 9100,
    },
  ];

  console.log(SchemeUtil.alpha);

  return { schemaSolutionGraph, SCHEMA_LABEL };
};
