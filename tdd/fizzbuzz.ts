export const Fizzbuzz = (value: number) => {
  if (value === 0) return "0";
  let res: string = '';
  if (value % 3 === 0) res += 'FIZZ';
  if (value % 5 === 0) res += 'BUZZ';
  if (res) return res;
  return value.toString();
};