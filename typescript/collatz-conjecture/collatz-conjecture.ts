export default class CollatzConjecture {
  static steps(n: number, i: number = 0): number {
    if (n < 1) {
      throw new Error('Only positive numbers are allowed');
    }

    if (n === 1) {
      return i;
    }

    return n % 2 === 0 ? CollatzConjecture.steps(n / 2, ++i) : CollatzConjecture.steps(3 * n + 1, ++i);
  }
}
