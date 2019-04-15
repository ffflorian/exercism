const reverseString = require('./reverse-string');

describe('ReverseString', () => {
  it('empty string', () => {
    const expected = '';
    const actual = reverseString('');
    expect(actual).toEqual(expected);
  });

  it('a word', () => {
    const expected = 'tobor';
    const actual = reverseString('robot');
    expect(actual).toEqual(expected);
  });

  it('a capitalized word', () => {
    const expected = 'nemaR';
    const actual = reverseString('Ramen');
    expect(actual).toEqual(expected);
  });

  it('a sentence with punctuation', () => {
    const expected = '!yrgnuh ma I';
    const actual = reverseString('I am hungry!');
    expect(actual).toEqual(expected);
  });

  it('a palindrome', () => {
    const expected = 'racecar';
    const actual = reverseString('racecar');
    expect(actual).toEqual(expected);
  });
});
