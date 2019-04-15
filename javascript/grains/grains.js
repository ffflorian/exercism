const BigInt = require('./big-integer');

module.exports = class Grains {
  square(num) {
    return BigInt(2).pow(num - 1).toString();
  }
  total() {
    return BigInt(2).pow(64).prev().toString();
  }
};
