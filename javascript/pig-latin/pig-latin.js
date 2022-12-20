/**
 *
 * @param {string} input
 * @returns string
 */
export function translate(input) {
  return input
    .split(' ')
    .map(word => {
      const vowelBeginning = /^([aeoui]|xr|yt)/.test(word);
      if (vowelBeginning) {
        return `${word}ay`;
      }

      const [, c1, c2] = /^(ch|rh|thr?|sch|[^aeoui]?qu)(.*)/.exec(word) || [];

      if (c1 && c2) {
        return `${c2}${c1}ay`;
      }

      return `${word.slice(1)}${word.slice(0, 1)}ay`;
    })
    .join(' ');
}
