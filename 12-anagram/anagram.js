module.exports = function (word) {
    'use strict';

    const sortString = (string) => {
        return string.toLowerCase().split('').sort().join('');
    };

    return {
        matches (...matches) {
            matches = Array.prototype.concat.apply([], matches);
            return matches.reduce((result, matchTest) => {
                if (word.toLowerCase() !== matchTest.toLowerCase()
                    && sortString(word) === sortString(matchTest)) {
                    result.push(matchTest);
                }
                return result;
            }, []);
        }
    };
};
