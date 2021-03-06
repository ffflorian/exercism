export class Clock {
  constructor(hours = 0, minutes = 0) {
    hours = (hours + Math.floor(minutes / 60)) % 24;
    minutes = minutes % 60;
    this.hours = hours < 0 ? 24 + hours : hours;
    this.minutes = minutes < 0 ? 60 + minutes : minutes;
  }

  /**
   * @param {number} hours
   * @param {number} minutes
   */
  static at(hours, minutes) {
    return new Clock(hours, minutes);
  }

  /**
   * @param {Clock} clock
   */
  equals(clock) {
    if (!(clock instanceof Clock)) {
      throw new TypeError('Not a valid clock');
    }
    return this.toString() == clock.toString();
  }

  /**
   * @param {number} minutes
   */
  minus(minutes = 0) {
    return Clock.at(this.hours, this.minutes - minutes);
  }

  /**
   * @param {number} minutes
   */
  plus(minutes = 0) {
    return Clock.at(this.hours, this.minutes + minutes);
  }

  toString() {
    return `${this.hours.toString().padStart(2, '0')}:${this.minutes.toString().padStart(2, '0')}`;
  }
}
