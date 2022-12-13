export const hasNegativeValuesEidanVersion = (numbers: Array<number>): void => {
  let negativeArray = [];
  numbers.forEach(el => {
     if(Math.sign(el) === -1){
       negativeArray.push(el)
     }
  });
  if(negativeArray.length){
       throw Error(`Negative value [${negativeArray}]`);
  }
}



// const hasNegativeValues = (numbers: Array<number>): number => {
//
//   let negativeNumbers = [];
//   numbers.forEach(el => (
//     el >= -1 ? negativeNumbers.push(el);
// ));
//   negativeNumbers.forEach(el => (
//
//   ))
// }

export const checkNegativeValue = (numbers: Array<number>): void => {
  let negative: Array<number> = [];
  numbers.forEach((part: number) => {
    if (part < 0) {
      negative.push(part);
    }
  });
  if (negative.length > 0) {
    throw Error(`Negative value [${negative}]`);
  }
}
