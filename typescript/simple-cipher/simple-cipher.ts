export class SimpleCipher {
  private readonly _key: string;
  private readonly alphabet: string[];
  private readonly keyIndizes: any;

  constructor(key?: string) {
    if (key && !/^[a-z]+$/.test(key)) {
      throw new Error('Bad key');
    }
    this.alphabet = [...'abcdefghijklmnopqrstuvwxyz'];
    this._key = key || this._generateRandomKey(100);
    this.keyIndizes = this._key.split('').map(char => this.alphabet.indexOf(char));
  }

  get key(): string {
    return this._key;
  }

  _generateRandomKey(length: number): string {
    let key = '';
    const charactersLength = this.alphabet.length;
    for (let i = 0; i < length; i++) {
      key += this.alphabet[Math.floor(Math.random() * charactersLength)];
    }

    return key;
  }

  decode(encodedText: string): string {
    return encodedText
      .split('')
      .map((char, charIndex) => {
        const keyPosition = this.alphabet.indexOf(char) - this.keyIndizes[charIndex % this.keyIndizes.length];
        return this.alphabet[(keyPosition + 26) % 26];
      })
      .join('');
  }

  encode(clearText: string): string {
    return clearText
      .split('')
      .map((char, charIndex) => {
        const keyPosition = this.alphabet.indexOf(char) + this.keyIndizes[charIndex % this.keyIndizes.length];
        return this.alphabet[keyPosition % 26];
      })
      .join('');
  }
}
