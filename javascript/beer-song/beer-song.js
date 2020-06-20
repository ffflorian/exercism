/**
 * @param {number} num
 * @param {boolean} [lowercase]
 */
function count(num, lowercase) {
  return num === 0 ? (lowercase ? 'n' : 'N') + 'o more' : num === -1 ? '99' : num;
}

/**
 * @param {number} num
 * @param {boolean} [extended]
 */
function bottle(num, extended) {
  return `bottle${num !== 1 ? 's' : ''} of beer${extended ? ' on the wall' : ''}`;
}

/**
 * @param {number} num
 */
function take(num) {
  return num === 0
    ? 'Go to the store and buy some more'
    : 'Take ' + (num === 1 ? 'it' : 'one') + ' down and pass it around';
}

/**
 * @param {number} num
 */
function verse(num) {
  return [
    `${count(num)} ${bottle(num, true)}, ${count(num, num === 0)} ${bottle(num)}.`,
    `${take(num)}, ${count(num - 1, num === 1)} ${bottle(num - 1, true)}.`,
    '',
  ];
}

/**
 * @param {number} begin
 * @param {number} times
 */
export function recite(begin = 99, times = 0) {
  /** @type {string[]} */
  const verses = [];
  for (let i = 0; i < times; i++) {
    verses.push(...verse(begin - i));
  }
  verses.pop();
  return verses;
}
