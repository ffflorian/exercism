export const steps = (n, i = 0) => {
  if (n < 1) {
    throw new Error('Only positive numbers are allowed');
  }

  if (n === 1) {
    return i;
  }

  return n % 2 === 0 ? steps(n / 2, ++i) : steps(3 * n + 1, ++i);
};
