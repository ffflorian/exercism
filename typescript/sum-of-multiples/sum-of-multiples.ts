export function sum(divisors: number[], limit: number): number {
  return divisors
    .reduce((result: number[], divisor) => {
      for (let candidate = 1; candidate < limit; candidate++) {
        if (candidate % divisor === 0 && !result.includes(candidate)) {
          result.push(candidate);
        }
      }
      return result;
    }, [])
    .reduce((result, candidate) => result + candidate, 0);
}
