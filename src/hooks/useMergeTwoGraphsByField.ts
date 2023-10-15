export const useMergeTwoGraphsByField = (
  fieldName: string,
  firstGraph: any[],
  secondGraph: any[]
) => {
  const mergedGraph = [];

  const minLength = Math.min(firstGraph.length, secondGraph.length);

  for (let i = 0; i < minLength; i++) {
    const mergedObject = {
      ...firstGraph[i],
      ...secondGraph[i],
      [fieldName]: {
        ...firstGraph[i][fieldName],
        ...secondGraph[i][fieldName],
      },
    };

    mergedGraph.push(mergedObject);
  }

  return mergedGraph;
};
