module.exports = function () {
    'use strict';

    return {
        transform (oldSet) {
            return Object.keys(oldSet).reduce((newSet, index) => {
                oldSet[index].forEach(letter => newSet[letter.toLowerCase()] = parseInt(index));
                return newSet;
            }, {});
        }
    };
};
