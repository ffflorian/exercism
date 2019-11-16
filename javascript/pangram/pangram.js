export function isPangram(sentence) {
  sentence = sentence.trim().toLowerCase();
  return 'abcdefghijklmnopqrstuvwxyz'.split('').filter(char => sentence.indexOf(char) === -1).length < 1;
}
