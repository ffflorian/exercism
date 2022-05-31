export class Anagram {
  public word: string;

  constructor(word: string) {
    this.word = word;
  }

  public matches(...matches: string[]): string[] {
    return matches.reduce((result: string[], matchTest) => {
      if (this.word.toLowerCase() !== matchTest.toLowerCase() && this.sort(this.word) === this.sort(matchTest)) {
        result.push(matchTest);
      }
      return result;
    }, []);
  }

  private sort(word: string): string {
    return word.toLowerCase().split('').sort().join('');
  }
}
