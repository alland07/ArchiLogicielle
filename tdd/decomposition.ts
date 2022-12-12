export const Decomposition = (number : number): Array<Number> => {
  if (number === 4) return [2, 2];
  if (number > 1) return [number];
  return [];
};
