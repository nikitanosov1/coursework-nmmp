export const useMergeGraphs = (graphs: any[][]) => {
  const mergedGraph = [];
  const countOfGraphs = graphs.length;

  for (let j = 0; j < countOfGraphs; ++j) {
    for (let i = 0; i < graphs[j].length; ++i) {
      mergedGraph.push(graphs[j][i]);
    }
  }

  return mergedGraph;
};
