//
// This is a stub file for the 'Hello World' exercise. It's been provided as a
// convenience to get you started writing code faster.
// Make sure to look at hello-world.spec.js--that should give you some hints about what is
// expected here.

var HelloWorld = function () {
    // empty
};

HelloWorld.prototype.hello = function (input) {
    if (typeof input === 'string' && input !== '') {
        return `Hello, ${input}!`;
    } else {
        return 'Hello, World!';
    }
};

module.exports = HelloWorld;
