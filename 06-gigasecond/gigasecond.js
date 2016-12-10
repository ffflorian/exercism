module.exports = function (beginTime) {

    'use strict';

    return {
        date () {
            return new Date(beginTime.getTime() + 1e12);
        }
    }
};
