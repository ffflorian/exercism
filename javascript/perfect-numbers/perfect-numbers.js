

module.exports = class PerfectNumbers {
  classify(number) {
    if (number < 1) {
      return 'Classification is only possible for natural numbers.';
    }
    let result = 0;
    const maxDivisor = Math.floor(number / 2);
    for (let i = 1; i <= maxDivisor; i++) {
      if (number % i === 0) {
        result += i;
      }
    }
    return (result === number ? 'perfect' : (result > number ? 'abundant' : 'deficient'));
  }
};
