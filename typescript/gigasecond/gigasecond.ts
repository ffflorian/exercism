export default class Gigasecond {
  private readonly beginTime: Date;

  constructor(beginTime: Date) {
    this.beginTime = beginTime;
  }

  date(): Date {
    return new Date(this.beginTime.getTime() + 1e12);
  }
}
