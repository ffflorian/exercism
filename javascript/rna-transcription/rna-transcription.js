module.exports = class DnaTranscriber {
  toRna(DNA) {
    const map = {
      A: 'U',
      C: 'G',
      G: 'C',
      T: 'A',
    };
    return DNA.split('').map(obj => map[obj]).join('');
  }
};
