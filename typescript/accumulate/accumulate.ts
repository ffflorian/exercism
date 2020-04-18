export default function accumulate<V, A extends Array<V>>(array: A, accumulator: (value: V) => any) {
  const result = [];
  for (let index = 0; index < array.length; index++) {
    const processedValue = accumulator(array[index]);
    result.push(processedValue);
  }
  return result;
};
