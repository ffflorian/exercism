//@ts-check

const sharps = ['C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#', 'A', 'A#', 'B'];
const flats = ['F', 'Gb', 'G', 'Ab', 'A', 'Bb', 'B', 'C', 'Db', 'D', 'Eb', 'E'];
const usesFlats = ['F', 'Bb', 'Eb', 'Ab', 'Db', 'Gb', 'd', 'g', 'c', 'f', 'bb', 'eb'];
// eslint-disable-next-line sort-keys
const steps = {A: 3, M: 2, m: 1};

export class Scale {
  /**
   * @param {string} tonic
   */
  constructor(tonic) {
    /**
     * @private
     * @type {string}
     */
    this._tonic = tonic;
  }

  chromatic() {
    return usesFlats.includes(this._tonic) ? flats : sharps;
  }

  /**
   * @param {string} intervals
   */
  interval(intervals) {
    const currentTonic = `${this._tonic[0].toUpperCase()}${this._tonic.slice(1)}`;
    let scalePosition = this.chromatic().indexOf(currentTonic);
    return [...intervals].map(step => {
      const nextNote = this.chromatic()[scalePosition];
      scalePosition = (scalePosition + steps[step]) % this.chromatic().length;
      return nextNote;
    });
  }
}
