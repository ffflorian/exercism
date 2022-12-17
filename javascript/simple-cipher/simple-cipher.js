//@ts-check

const crypto = require('crypto');

export class Cipher {
  /**
   * @param {string} key
   */
  constructor(key) {
    if (!/^[a-z]+$/.test(key)) {
      throw new Error('Bad key');
    }
    /**
     * @private
     * @type {string[]}
     */
    this._alphabet = [...'abcdefghijklmnopqrstuvwxyz'];
    /**
     * @private
     * @type {string}
     */
    this._key = key || this._generateRandomKey(100);
    /**
     * @private
     * @type {number[]}
     */
    this._keyIndizes = [...this._key].map(char => this._alphabet.indexOf(char));
  }

  /**
   * @private
   * @param {number} length
   * @returns {string}
   */
  _generateRandomKey(length) {
    const randomBytes = crypto.randomBytes(length);
    let key = '';
    for (let index = 0; index < length; index++) {
      key += this._alphabet[Math.floor(randomBytes[index] / (256 / this._alphabet.length))];
    }
    return key;
  }

  /**
   * @param {string} clearText
   * @returns {string}
   */
  encode(clearText) {
    return [...clearText]
      .map((char, charIndex) => {
        const keyPosition = this._alphabet.indexOf(char) + this._keyIndizes[charIndex % this._keyIndizes.length];
        return this._alphabet[keyPosition % 26];
      })
      .join('');
  }

  /**
   * @param {string} encodedText
   * @returns {string}
   */
  decode(encodedText) {
    return [...encodedText]
      .map((char, charIndex) => {
        const keyPosition = this._alphabet.indexOf(char) - this._keyIndizes[charIndex % this._keyIndizes.length];
        return this._alphabet[(keyPosition + 26) % 26];
      })
      .join('');
  }

  get key() {
    return this._key;
  }
}
