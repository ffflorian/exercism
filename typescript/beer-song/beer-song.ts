function count(num: number, lowercase?: boolean): string {
  return num === 0 ? `${lowercase === true ? 'n' : 'N'}o more` : num === -1 ? '99' : num.toString();
}

function bottle(num: number, extended?: boolean): string {
  return `bottle${num !== 1 ? 's' : ''} of beer${extended === true ? ' on the wall' : ''}`;
}

function take(num: number): string {
  return num === 0 ? 'Go to the store and buy some more' : `Take ${num === 1 ? 'it' : 'one'} down and pass it around`;
}

export default class Beer {
  static sing(begin: number = 99, end: number = 0): string {
    const verses = [];
    for (let i = begin; i >= end; i--) {
      verses.push(this.verse(i));
    }
    return verses.join('\n');
  }

  static verse(num: number): string {
    return `${count(num)} ${bottle(num, true)}, ${count(num, num === 0)} ${bottle(num)}.\n${take(num)}, ${count(
      num - 1,
      num === 1
    )} ${bottle(num - 1, true)}.\n`;
  }
}
