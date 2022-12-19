export function toRna(dnaInput: string): string {
  const map = {
    A: 'U',
    C: 'G',
    G: 'C',
    T: 'A',
  };

  return [...dnaInput]
    .map(letter => {
      const transcribed = map[letter as keyof typeof map];
      if (!transcribed) {
        throw new Error('Invalid input DNA.');
      }
      return transcribed;
    })
    .join('');
}
