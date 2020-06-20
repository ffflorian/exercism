export function countWords(words) {
  return words
    .trim()
    .toLowerCase()
    .replace(/[^\w' ,]/g, '')
    .split(/[\t\n ,]+/)
    .filter(word => Boolean(word.trim()))
    .map(word => word.replace(/^'(.*)'$/, '$1'))
    .reduce((result, word) => {
      result[word] = result[word] + 1 || 1;
      return result;
    }, {});
}
