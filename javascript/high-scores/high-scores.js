export class HighScores {
  constructor(scores) {
    this._scores = scores;
  }

  _getSorted() {
    return [...this._scores].sort((a, b) => b - a);
  }

  get scores() {
    return this._scores;
  }

  get latest() {
    return [...this._scores].pop();
  }

  get personalBest() {
    return this._getSorted().shift();
  }

  get personalTopThree() {
    return this._getSorted().slice(0, 3);
  }
}
