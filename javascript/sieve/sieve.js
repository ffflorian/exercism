/**
 * @param {number} limit
 * @returns {number[]}
 */
export function primes(limit) {
  const list = [...Array(limit - 1)].map((_, i) => i + 2);

  for (let outerIndex = 0; outerIndex < list.length; outerIndex++) {
    const prime = list[outerIndex];

    for (let innerIndex = outerIndex + prime; innerIndex < list.length; innerIndex += prime) {
      delete list[innerIndex];
    }
  }

  return list.filter(Boolean);
}
