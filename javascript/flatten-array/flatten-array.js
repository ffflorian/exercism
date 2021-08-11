//@ts-check

/**
 * @template T
 * @param {T[] | T[][] | T[][][] | T[][][][]} input
 * @returns {T[]}
 */
export function flatten(input) {
  const output = [];
  for (const value of input) {
    if (typeof value !== 'undefined' && value !== null) {
      if (Array.isArray(value)) {
        output.push(...flatten(value));
      } else {
        output.push(value);
      }
    }
  }
  return output;
}
