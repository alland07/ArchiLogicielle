export const exo3 = (input: string) => {
  if (input.trim() === "") return 0;

  const delimiters = [',', '\n'];
  let formattedInput = input;

  // Handle special delimiter
  if (input.startsWith("//")) {
    // Read the delimiter
    const end = input.slice(2);
    const [delimiter, ...numberString] = end.split(/\n/);
    delimiters.push(delimiter);
    // Format the input
    formattedInput = numberString.join(delimiter)
  }

  let result = 0;
  let parts: number[] = formattedInput
    .split(new RegExp(`[${delimiters.join('')}]`))
    .map((part) => parseInt(part));
  parts.forEach((part) => (result += part));

  return result;
};
