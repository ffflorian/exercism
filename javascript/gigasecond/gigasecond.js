module.exports = class GigaSecond {
  constructor(beginTime) {
    this.beginTime = beginTime;
  }

  date() {
    return new Date(this.beginTime.getTime() + 1e12);
  }
};
