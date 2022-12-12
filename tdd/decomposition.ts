export const Decomposition = (number : number): Array<Number> => {
  if (number === 0) return [0];
  if (number === 1) return [];
  const res: number[] = [];
  let rest = number;
  let diviseur = 2;
  while (rest > 1) {
    if (rest % diviseur === 0) {
      res.push(diviseur);
      rest /= diviseur;
    } else {
      diviseur++;
    }
  }
  return res;
};
