import { hasNegativeValuesEidanVersion } from "./negativeFunction";

/**
 * Checks whether the input string has a custom delimiter.
 * @param str
 */
const hasSpecialDelimiters = (str: string) => {
  return str.startsWith('//');
}

/**
 * Returns the delimiter string and the formatted input, from the input string.
 * @param input
 */
const getDelimiterAndFormattedInput = (input: string) => {
  const end = input.slice(2);
  const [ delimiter, ...numberString ] = end.split(/\n/);
  const formattedInput = numberString.join(delimiter)
  return { delimiter, formattedInput };
};

/**
 * Returns the sum of the numbers in the input string.
 * @param input
 * @throws {RangeError} if the input string contains a negative number.
 */
export const stringParse = (input: string) => {
  if (input.trim() === "") return 0;

  const delimiters = [',', '\n'];
  let formattedInput = input;

  // Handle special delimiter
  if (hasSpecialDelimiters(input)) {
    // Read the delimiter
    const { delimiter, formattedInput: newFormattedInput } = getDelimiterAndFormattedInput(input);
    delimiters.push(delimiter);
    formattedInput = newFormattedInput;
  }

  let result = 0;
  let numbers: number[] = formattedInput
    .split(new RegExp(`[${delimiters.join('')}]`))
    .map((part) => parseInt(part));
  numbers
    .filter((part) => part <= 1000)
    .forEach((part) => (result += part));
  hasNegativeValuesEidanVersion(numbers);

  return result;
};
