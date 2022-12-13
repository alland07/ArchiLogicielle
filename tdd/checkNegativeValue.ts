

export const checkNegativeValue = (numbers: Array<number>): Array<number> => {
  let positive: Array<number>;
  let negative: Array<number>;
  numbers.forEach((part: number) => {
    if (part >= 0) {
      positive.push(part);
    } else {
      negative.push(part);
    }
  });
  if(negative.length > 0) {
      throw  new Error('Negative value'); // Argument of type 'number[]' is not assignable to parameter of type 'string'.
  } else return positive;
}
