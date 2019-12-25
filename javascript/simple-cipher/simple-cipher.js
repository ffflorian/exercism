const crypto = require('crypto');

export class Cipher {
  constructor(key) {
    if (!/^[a-z]+$/.test(key)) {
      throw new Error('Bad key');
    }
    this._alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');
    this._key = key || this._generateRandomKey(100);
    this._keyIndizes = this._key.split('').map(char => this._alphabet.indexOf(char));
  }

  _generateRandomKey(length) {
    const randomBytes = crypto.randomBytes(length);
    let key = '';
    for (let index = 0; index < length; index++) {
      key += this._alphabet[Math.floor(randomBytes[index] / (256 / this._alphabet.length))];
    }
    return key;
  }

  encode(clearText) {
    return clearText
      .split('')
      .map((char, charIndex) => {
        const keyPosition = this._alphabet.indexOf(char) + this._keyIndizes[charIndex % this._keyIndizes.length];
        return this._alphabet[keyPosition % 26];
      })
      .join('');
  }

  decode(encodedText) {
    return encodedText
      .split('')
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
