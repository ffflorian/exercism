//@ts-check

export class Clock {
  constructor(hours = 0, minutes = 0) {
    hours = (hours + Math.floor(minutes / 60)) % 24;
    minutes = minutes % 60;
    /** @type {number} */
    this.hours = hours < 0 ? 24 + hours : hours;
    /** @type {number} */
    this.minutes = minutes < 0 ? 60 + minutes : minutes;
  }

  /**
   * @param {number} hours
   * @param {number} minutes
   * @returns {Clock}
   */
  static at(hours, minutes) {
    return new Clock(hours, minutes);
  }

  /**
   * @param {Clock} clock
   * @returns {boolean}
   */
  equals(clock) {
    if (!(clock instanceof Clock)) {
      throw new TypeError('Not a valid clock');
    }
    return this.toString() == clock.toString();
  }

  /**
   * @param {number} minutes
   * @returns {Clock}
   */
  minus(minutes = 0) {
    return Clock.at(this.hours, this.minutes - minutes);
  }

  /**
   * @param {number} minutes
   * @returns {Clock}
   */
  plus(minutes = 0) {
    return Clock.at(this.hours, this.minutes + minutes);
  }

  toString() {
    return `${this.hours.toString().padStart(2, '0')}:${this.minutes.toString().padStart(2, '0')}`;
  }
}
