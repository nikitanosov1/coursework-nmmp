export const useMergeGraphs = (
  fieldName: string,
  graphs: any[][],
  ) => {
  const mergedGraph = new Map<string, object>();
  
  // let maxCountsOfPoints = 0;
  // for (let i = 0; i < graphs.length; i++) {
  //   maxCountsOfPoints = Math.max(maxCountsOfPoints, graphs[i].length);
  // }
  
  for (let graph of graphs) {
    for (let point of graph) {
      if (mergedGraph.has(point[fieldName])) {
        const currentInfo = mergedGraph.get(point[fieldName]);
        const newCurrentInfo = {
          ...currentInfo,
          ...point
        };
        mergedGraph.set(point[fieldName], newCurrentInfo);
      } else {
        mergedGraph.set(point[fieldName], point);
      }
    }
  }
  const points = Array.from(mergedGraph.values());
  const sortedPoints = points.sort((a: any, b: any) => a[fieldName] - b[fieldName]);
  return sortedPoints;
  };