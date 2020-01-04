export default function transform(oldSet: Record<string, string[]>): Record<string, number> {
  return Object.keys(oldSet).reduce((newSet: Record<string, number>, index) => {
    oldSet[index].forEach(letter => (newSet[letter.toLowerCase()] = parseInt(index)));
    return newSet;
  }, {});
}
