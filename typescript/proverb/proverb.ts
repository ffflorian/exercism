export default function Proverb(...words: string[]): string {
  let result = '';

  for (let index = 0; index < words.length; index++) {
    const currentWord = words[index];
    const nextWord = words[index + 1];
    result += nextWord
      ? `For want of a ${currentWord} the ${nextWord} was lost.\n`
      : `And all for the want of a ${words[0]}.`;
  }

  return result;
}
