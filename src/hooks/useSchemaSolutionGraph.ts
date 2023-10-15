import { ESchemaName } from "@/types/graph";
import { useExplicitSchemaSolutionGraph } from "./useExplicitSchemaSolutionGraph";
import { useImplicitSchemaSolutionGraph } from "./useImplicitSchemaSolutionGraph";
import { useKrankNicholsonSolutionGraph } from "./useKrankNicholsonSolutionGraph";

interface IProps {
  schemaName: ESchemaName;
  I: number;
  K: number;
  k: number; // Номер временного слоя
}

export const useSchemaSolutionGraph = ({ schemaName, I, K, k }: IProps) => {
  const schemaHooks = {
    [ESchemaName.EXPLICIT]: useExplicitSchemaSolutionGraph,
    [ESchemaName.IMPLICIT]: useImplicitSchemaSolutionGraph,
    [ESchemaName.KRANK_NICHOLSON]: useKrankNicholsonSolutionGraph,
  };

  const selectedHook = schemaHooks[schemaName];
  if (!selectedHook) {
    throw new Error(`Invalid schema name: ${schemaName}`);
  }
  return selectedHook({ I, K, k });
};
