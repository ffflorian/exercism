export function isIsogram(word: string): boolean {
  return !/([A-zÀ-ÿ]).*\1/i.test(word);
}
