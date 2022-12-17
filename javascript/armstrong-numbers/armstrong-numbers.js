//@ts-check

/**
 * @param {number} candidate
 * @returns {boolean}
 */
export const isArmstrongNumber = candidate => {
  const candidateArray = [...candidate.toString()].map(Number);
  const result = candidateArray.reduce((acc, n) => acc + Math.pow(n, candidateArray.length), 0);
  return result === candidate;
};
