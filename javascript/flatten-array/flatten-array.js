//@ts-check

/**
 * @param {any[]} input
 * @returns {any[]}
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
