module.exports = function (word) {
    'use strict';

    return {
        isIsogram () {
            return !(/([A-zÀ-ÿ]).*\1/i).test(word);
        }
    };
};
