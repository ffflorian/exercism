export default class Transpose {
  static transpose(lines: string[]): string[] {
    return lines.reduce((result: string[], line, lineIndex) => {
      [...line].map((value, key) => {
        if (typeof result[key] === 'undefined') {
          result[key] = new Array(lineIndex + 1).join(' ');
        }

        result[key] += value;
      });

      return result;
    }, []);
  }
}
