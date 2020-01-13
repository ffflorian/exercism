const ordinals = [
  'first',
  'second',
  'third',
  'fourth',
  'fifth',
  'sixth',
  'seventh',
  'eighth',
  'ninth',
  'tenth',
  'eleventh',
  'twelfth',
];

const verseParts = [
  'a Partridge in a Pear Tree',
  'two Turtle Doves',
  'three French Hens',
  'four Calling Birds',
  'five Gold Rings',
  'six Geese-a-Laying',
  'seven Swans-a-Swimming',
  'eight Maids-a-Milking',
  'nine Ladies Dancing',
  'ten Lords-a-Leaping',
  'eleven Pipers Piping',
  'twelve Drummers Drumming',
];

export const recite = (from, to = from) => {
  let verses = '';
  console.log({from, to})

  for (let verseIndex = from; verseIndex <= to; verseIndex++) {
    verses += `On the ${ordinals[verseIndex - 1]} day of Christmas my true love gave to me: ${verseParts.slice(0, to).join(', ')}.\n`;
  }

  return verses;
};
