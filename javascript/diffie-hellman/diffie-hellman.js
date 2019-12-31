export class DiffieHellman {
  constructor(p, g) {
    if (p + g >= 1000) {
      throw new Error('Arguments out of bounds');
    }
    if (!this._isPrime(p) || !this._isPrime(g)) {
      throw new Error('Arguments need to be prime numbers');
    }
    this.p = p;
    this.g = g;
  }

  _isPrime(number) {
    for (let primeIndex = 2; primeIndex <= Math.sqrt(number); primeIndex++) {
      if (number % primeIndex === 0) {
        return false;
      }
    }
    return number > 1;
  }

  getPublicKeyFromPrivateKey(privateKey) {
    if (privateKey < 2 || privateKey >= this.p) {
      throw new Error('Invalid private key');
    }
    return Math.pow(this.g, privateKey) % this.p;
  }

  getSharedSecret(privateKeyA, publicKeyB) {
    return Math.pow(publicKeyB, privateKeyA) % this.p;
  }
}
