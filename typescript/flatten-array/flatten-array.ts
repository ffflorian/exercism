export function flatten<T>(input: T[]): T[];
export function flatten<T>(input: T[][]): T[] {
  const output: T[] = [];
  for (const value of input) {
    if (typeof value !== 'undefined' && value !== null) {
      if (Array.isArray(value)) {
        output.push(...(flatten(value) as T[]));
      } else {
        output.push(value);
      }
    }
  }
  return output;
}
