const Isogram = require('./isogram');

describe('Isogram Test Suite', () => {
  it('duplicates', () => {
    const word = new Isogram('duplicates');

    expect(word.isIsogram()).toEqual(true);
  });

  it('eleven', () => {
    const word = new Isogram('eleven');

    expect(word.isIsogram()).toEqual(false);
  });

  it('subdermatoglyphic', () => {
    const word = new Isogram('subdermatoglyphic');

    expect(word.isIsogram()).toEqual(true);
  });

  it('Alphabet', () => {
    const word = new Isogram('Alphabet');

    expect(word.isIsogram()).toEqual(false);
  });

  it('thumbscrew-japingly', () => {
    const word = new Isogram('thumbscrew-japingly');

    expect(word.isIsogram()).toEqual(true);
  });

  it('Hjelmqvist-Gryb-Zock-Pfund-Wax', () => {
    const word = new Isogram('Hjelmqvist-Gryb-Zock-Pfund-Wax');

    expect(word.isIsogram()).toEqual(true);
  });

  it('Heizölrückstoßabdämpfung', () => {
    const word = new Isogram('Heizölrückstoßabdämpfung');

    expect(word.isIsogram()).toEqual(true);
  });

  it('the quick brown fox', () => {
    const word = new Isogram('the quick brown fox');

    expect(word.isIsogram()).toEqual(false);
  });

  it('Emily Jung Schwartzkopf', () => {
    const word = new Isogram('Emily Jung Schwartzkopf');

    expect(word.isIsogram()).toEqual(true);
  });

  it('éléphant', () => {
    const word = new Isogram('éléphant');

    expect(word.isIsogram()).toEqual(false);
  });

});
