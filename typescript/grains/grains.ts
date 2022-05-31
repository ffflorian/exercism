export function square(num: number): bigint {
  const bigNum = BigInt(num);
  if (bigNum < 1n || bigNum > 64n) {
    throw new Error('Invalid input');
  }

  return 2n ** (bigNum - 1n);
}

export function total(): bigint {
  return 2n ** 64n;
}
