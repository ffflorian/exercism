module.exports = function (word) {

    'use strict';

    String.prototype.sort = function () {
        return this.toLowerCase().split('').sort().join('');
    };

    return {
        matches (...matches) {
            matches = Array.prototype.concat.apply([], matches);
            return matches.reduce((result, matchTest) => {
                if (word.toLowerCase() !== matchTest.toLowerCase() &&
                    word.sort() === matchTest.sort()) {
                    result.push(matchTest);
                }
                return result;
            }, []);
        }
    }
};
