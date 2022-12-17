export function isPangram(sentence: string): boolean {
  sentence = sentence.trim().toLowerCase();
  return [...'abcdefghijklmnopqrstuvwxyz'].filter(char => sentence.indexOf(char) === -1).length < 1;
}
