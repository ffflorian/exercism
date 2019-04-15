module.exports = () => {
  const verses = [
    {
      end: ' Perhaps she\'ll die.\n',
      message: '',
      type: 'fly',
    },
    {
      'catch': 'fly',
      message: 'It wriggled and jiggled and tickled inside her.\n',
      type: 'spider',
    },
    {
      'catch': 'spider that wriggled and jiggled and tickled inside her',
      message: 'How absurd to swallow a bird!\n',
      type: 'bird',
    },
    {
      'catch': 'bird',
      message: 'Imagine that, to swallow a cat!\n',
      type: 'cat',
    },
    {
      'catch': 'cat',
      message: 'What a hog, to swallow a dog!\n',
      type: 'dog',
    },
    {
      'catch': 'dog',
      message: 'Just opened her throat and swallowed a goat!\n',
      type: 'goat',
    },
    {
      'catch': 'goat',
      message: 'I don\'t know how she swallowed a cow!\n',
      type: 'cow',
    },
    {
      last: true,
      message: 'She\'s dead, of course!\n',
      type: 'horse',
      why: 'catch',
    },
  ];

  return {
    verse (index) {
      if (typeof index !== 'number') {
        throw new 'Invalid argument';
      }
      let verse = `I know an old lady who swallowed a ${verses[index - 1].type}.\n${verses[index - 1].message}`;
      for (let i = index - 1; i >= 0; i--) {
        const v = verses[i];
        if (v.last === true) {
          break;
        }
        verse += `${(v.catch ? `She swallowed the ${v.type} to catch the ${v.catch}.\n` : `I don\'t know why she swallowed the ${v.type}.`)}${(v.end ? v.end : '')}`;
      }
      return `${verse}`;
    },
    verses (begin, end) {
      if (typeof begin !== 'number' || typeof end !== 'number') {
        throw 'Invalid argument';
      }
      let song = '';

      for (let i = begin; i <= end; i++) {
        song += `${this.verse(i)}\n`;
      }

      return song;
    },
  };
};
