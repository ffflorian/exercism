export function parse(phrase: string): string {
  return phrase
    .split(/[a-z](?=[A-Z])|[-_ ]/)
    .reduce((result, word) => (result += word.charAt(0)), '')
    .toUpperCase();
}
