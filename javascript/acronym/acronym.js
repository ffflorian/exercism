//@ts-check

/**
 * @param {string} text
 * @returns {string}
 */
export function parse(text) {
  return text
    .split(/[a-z](?=[A-Z])|[-_ ]/)
    .reduce((result, word) => (result += word.charAt(0)), '')
    .toUpperCase();
}
