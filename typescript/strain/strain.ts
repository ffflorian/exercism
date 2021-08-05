export function keep<T>(arr: T[], fn: (value: T) => boolean): T[] {
  return arr.filter(val => fn(val));
}

export function discard<T>(arr: T[], fn: (value: T) => boolean): T[] {
  return arr.filter(val => !fn(val));
}
