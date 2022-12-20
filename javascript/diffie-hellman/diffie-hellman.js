//@ts-check

export class DiffieHellman {
  /**
   * @param {number} p
   * @param {number} g
   */
  constructor(p, g) {
    if (p + g >= 1000) {
      throw new Error('Arguments out of bounds');
    }
    if (!this._isPrime(p) || !this._isPrime(g)) {
      throw new Error('Arguments need to be prime numbers');
    }
    /** @type {number} */
    this.p = p;
    /** @type {number} */
    this.g = g;
  }

  /**
   * @private
   * @param {number} number
   * @returns {boolean}
   */
  _isPrime(number) {
    for (let primeIndex = 2; primeIndex <= Math.sqrt(number); primeIndex++) {
      if (number % primeIndex === 0) {
        return false;
      }
    }
    return number > 1;
  }

  /**
   * @param {number} privateKey
   * @returns {number}
   */
  getPublicKey(privateKey) {
    if (privateKey < 2 || privateKey >= this.p) {
      throw new Error('Invalid private key');
    }
    return Math.pow(this.g, privateKey) % this.p;
  }

  /**
   * @param {number} privateKeyB
   * @param {number} publicKeyA
   * @returns {number}
   */
  getSecret(publicKeyA, privateKeyB) {
    return Math.pow(publicKeyA, privateKeyB) % this.p;
  }
}
