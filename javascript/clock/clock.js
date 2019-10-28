

module.exports = class Clock {
  constructor(hours = 0, minutes = 0) {
    Clock.checkNumbers(hours, minutes)
    hours = (hours + Math.floor(minutes / 60)) % 24;
    minutes = minutes % 60;
    this.hours = (hours < 0) ? 24 + hours : hours;
    this.minutes = (minutes < 0) ? 60 + minutes : minutes;
  }

  static at(hours, minutes) {
    return new Clock(hours, minutes);
  }

  static checkNumbers(...objects) {
    objects.forEach(obj => {
      if (typeof obj !== 'number') {
        throw new TypeError('Invalid number');
      }
    });
  }

  static pad(n) {
    return (n < 10) ? (`0${n}`) : n;
  }

  equals(clock) {
    if (!(clock instanceof Clock)) {
      throw new TypeError('Not a valid clock');
    }
    return this.toString() == clock.toString();
  }

  minus(minutes = 0) {
    Clock.checkNumbers(minutes);
    return Clock.at(this.hours, (this.minutes - minutes));
  }

  plus(minutes = 0) {
    Clock.checkNumbers(minutes);
    return Clock.at(this.hours, (this.minutes + minutes));
  }

  toString() {
    return `${Clock.pad(this.hours)}:${Clock.pad(this.minutes)}`;
  }
};
