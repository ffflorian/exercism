export function accumulate<V, A extends V[]>(array: A, accumulator: (value: V) => any): any[] {
  const result = [];
  for (let index = 0; index < array.length; index++) {
    const processedValue = accumulator(array[index]);
    result.push(processedValue);
  }
  return result;
}
