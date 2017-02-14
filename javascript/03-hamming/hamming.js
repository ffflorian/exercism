module.exports = function () {
    'use strict';

    return {
        compute (strand1, strand2) {
            if (strand1.length === strand2.length) {
                let diff = 0;
                for (let i = 0; i < strand1.length; i++) {
                    if (strand1[i] !== strand2[i]) {
                        diff++;
                    }
                }
                return diff;
            } else {
                throw new Error('DNA strands must be of equal length.');
            }
        }
    };
};
