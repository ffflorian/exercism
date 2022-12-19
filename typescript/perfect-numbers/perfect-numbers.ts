export function classify(number: number): 'perfect' | 'abundant' | 'deficient' {
  if (number < 1) {
    throw new Error('Classification is only possible for natural numbers.');
  }
  let result = 0;
  const maxDivisor = Math.floor(number / 2);
  for (let i = 1; i <= maxDivisor; i++) {
    if (number % i === 0) {
      result += i;
    }
  }
  return result === number ? 'perfect' : result > number ? 'abundant' : 'deficient';
}
