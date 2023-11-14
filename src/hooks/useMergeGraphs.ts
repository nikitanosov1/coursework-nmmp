export const useMergeGraphs = (
  fieldName: string,
  firstGraph: any[],
  secondGraph: any[],
  thirdGraph: any[],
  fourthGraph:any[]
  ) => {
  const mergedGraph = [];
  
  const minLength = Math.min(firstGraph.length, secondGraph.length);
  
  for (let i = 0; i < minLength; i++) {
  const mergedObject = {
  ...firstGraph[i],
  ...secondGraph[i],
  ...thirdGraph[i],
  ...fourthGraph[i],
  [fieldName]: firstGraph[i][fieldName],
  };
  
  mergedGraph.push(mergedObject);
  }
  
  return mergedGraph;
  };