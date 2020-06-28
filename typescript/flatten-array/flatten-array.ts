export default class FlattenArray {
  static flatten<T>(input: T[]): T[];
  static flatten<T>(input: T[][]): T[] {
    const output: T[] = [];
    for (const value of input) {
      if (typeof value !== 'undefined' && value !== null) {
        if (Array.isArray(value)) {
          output.push(...(FlattenArray.flatten(value) as T[]));
        } else {
          output.push(value);
        }
      }
    }
    return output;
  }
}
