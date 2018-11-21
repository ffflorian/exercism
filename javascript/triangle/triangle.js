module.exports = function (a, b, c) {
    'use strict';

    return {
        kind () {
            if ((a * b * c <= 0) || (c > a + b || a > b + c || b > a + c)) {
                throw new Error('Degenerate triangle');
            } else if (a === b && b === c) {
                return 'equilateral';
            } else if (a !== b && b !== c && c !== a) {
                return 'scalene';
            } else {
                return 'isosceles';
            }
        }
    };
};
