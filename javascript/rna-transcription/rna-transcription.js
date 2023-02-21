export function toRna(DNA) {
  const map = {
    A: 'U',
    C: 'G',
    G: 'C',
    T: 'A',
  };
  return [...DNA].map(obj => map[obj]).join('');
}
