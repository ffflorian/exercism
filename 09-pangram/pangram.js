module.exports = function (sentence) {

    'use strict';

    sentence = sentence.trim().toLowerCase();

    return {
        isPangram () {
            return 'abcdefghijklmnopqrstuvwxyz'.split('').filter((char) =>
                sentence.indexOf(char) === -1
            ).length < 1;
        }
    }
};
