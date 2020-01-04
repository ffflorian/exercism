export default class DiffieHellman {
  private readonly g: number;
  private readonly p: number;

  constructor(p: number, g: number) {
    if (p + g >= 1000) {
      throw new Error('Arguments out of bounds');
    }
    if (!this.isPrime(p) || !this.isPrime(g)) {
      throw new Error('Arguments need to be prime numbers');
    }
    this.p = p;
    this.g = g;
  }

  getPublicKeyFromPrivateKey(privateKey: number): number {
    if (privateKey < 2 || privateKey >= this.p) {
      throw new Error('Invalid private key');
    }
    return Math.pow(this.g, privateKey) % this.p;
  }

  getSharedSecret(privateKeyA: number, publicKeyB: number): number {
    return Math.pow(publicKeyB, privateKeyA) % this.p;
  }

  private isPrime(number: number): boolean {
    for (let primeIndex = 2; primeIndex <= Math.sqrt(number); primeIndex++) {
      if (number % primeIndex === 0) {
        return false;
      }
    }
    return number > 1;
  }
}
