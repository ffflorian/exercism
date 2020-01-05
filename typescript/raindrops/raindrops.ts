export default class Raindrops {
  convert(count: number): string {
    let result = '';

    if (count % 3 === 0) {
      result += 'Pling';
    }

    if (count % 5 === 0) {
      result += 'Plang';
    }

    if (count % 7 === 0) {
      result += 'Plong';
    }

    return result || count.toString();
  }
}
