//@ts-check

/**
 * @param {string[]} array
 * @param {(input: string) => string} accumulator
 * @returns {string[]}
 */
export const accumulate = (array, accumulator) => {
  const result = [];
  for (let index = 0; index < array.length; index++) {
    const processedValue = accumulator(array[index]);
    result.push(processedValue);
  }
  return result;
};
