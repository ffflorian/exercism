module.exports = function () {
    'use strict';

    return {
        transform (oldSet) {
            const newSet = {};
            for (let index in oldSet) {
                if (!oldSet.hasOwnProperty(index)) {
                    continue;
                }
                oldSet[index].forEach((letter) => {
                    if (typeof letter !== 'string') {
                        return;
                    }
                    letter = letter.toLowerCase();
                    try {
                        newSet[letter] = parseInt(index, 10);
                    } catch (e) {
                        throw new Error(e);
                    }
                });
            }
            return newSet;
        }
    };
};
