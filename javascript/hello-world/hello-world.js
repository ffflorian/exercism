//
// This is a stub file for the 'Hello World' exercise. It's been provided as a
// convenience to get you started writing code faster.
// Make sure to look at hello-world.spec.js--that should give you some hints about what is
// expected here.

const HelloWorld = function() {
  // empty
};

HelloWorld.prototype.hello = input => {
  if (typeof input === 'string' && input !== '') {
    return `Hello, ${input}!`;
  }
  return 'Hello, World!';

};

module.exports = HelloWorld;
