// const hasNegativeValuesEidanVersion = (numbers: Array<number>): number => {
//   let negativeArray = []
//   numbers.forEach(el => {
//      if(Math.sign(el) === -1){
//        negativeArray.push(el)
//      }
//   });
//   if(negativeArray.length){
//        throw Error('nombre negatif')
//   }
// }



const hasNegativeValues = (numbers: Array<number>): number => {

  let negativeNumbers = [];
  numbers.forEach(el => {
    el >= -1 ? negativeNumbers.push(el);
  });
  negativeNumbers.forEach()
}
