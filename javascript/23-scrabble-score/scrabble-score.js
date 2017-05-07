'use strict';

const values = [
    [['A', 'E', 'I', 'O', 'U', 'L', 'N', 'R', 'S', 'T'], 1],
    [['D', 'G'], 2],
    [['B', 'C', 'M', 'P'], 3],
    [['F', 'H', 'V', 'W', 'Y'], 4],
    [['K'], 5],
    [['J', 'X'], 8],
    [['Q', 'Z'], 10],
];

module.exports = (word) => {
    if (!word || /^\s*$/.test(word)) {
        return 0;
    }
    return word.toUpperCase().split('').reduce((result, letter) => {
        let points = 0;
        values.forEach((group) => {
            if (~group[0].indexOf(letter)) {
                points += group[1];
            }
        });
        return result + points;
    }, 0);
};
