export const sum = (divisors, limit) => {
  return divisors
    .reduce((result, divisor) => {
      for (let candidate = 1; candidate < limit; candidate++) {
        if (candidate % divisor === 0 && !result.includes(candidate)) {
          result.push(candidate);
        }
      }
      return result;
    }, [])
    .reduce((result, candidate) => result + candidate, 0);
};
