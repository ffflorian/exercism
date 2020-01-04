export default class Clock {
  static at(hours: number, minutes: number): Clock {
    return new Clock(hours, minutes);
  }

  static checkNumbers(...numbers: number[]): void {
    numbers.forEach(number => {
      if (typeof number !== 'number') {
        throw new TypeError('Invalid number');
      }
    });
  }

  static pad(n: number): string {
    return n < 10 ? `0${n}` : n.toString();
  }
  private readonly hours: number;
  private readonly minutes: number;

  constructor(hours: number = 0, minutes: number = 0) {
    Clock.checkNumbers(hours, minutes);
    hours = (hours + Math.floor(minutes / 60)) % 24;
    minutes = minutes % 60;
    this.hours = hours < 0 ? 24 + hours : hours;
    this.minutes = minutes < 0 ? 60 + minutes : minutes;
  }

  equals(clock: Clock): boolean {
    if (!(clock instanceof Clock)) {
      throw new TypeError('Not a valid clock');
    }
    return this.toString() === clock.toString();
  }

  minus(minutes: number = 0): Clock {
    Clock.checkNumbers(minutes);
    return Clock.at(this.hours, this.minutes - minutes);
  }

  plus(minutes: number = 0): Clock {
    Clock.checkNumbers(minutes);
    return Clock.at(this.hours, this.minutes + minutes);
  }

  toString(): string {
    return `${Clock.pad(this.hours)}:${Clock.pad(this.minutes)}`;
  }
}
