//@ts-check

/**
 * @param {string} input
 * @returns {string}
 */
export const decode = input => {
  return input
    .toLowerCase()
    .replace(/[^A-z\d]/g, '')
    .replace(/[A-z]/g, letter => {
      const charCode = letter.charCodeAt(0);
      const startIndex = charCode > 90 ? 97 : 65;
      return String.fromCharCode(startIndex + 25 - (charCode - startIndex));
    });
};

/**
 * @param {string} input
 * @returns {string}
 */
export const encode = input => {
  return decode(input)
    .match(/.{1,5}/g)
    .join(' ');
};
