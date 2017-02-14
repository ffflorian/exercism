module.exports = function (number) {
    'use strict';

    return {
        number () {
            if (number.length === 11 && number.match(/^1/) !== null) {
                return (/^.([0-9]*)/).exec(number)[1];
            } else if (number.match(/^[0-9]+$/) === null && (number.length > 9 || number.length <= 10)) {
                return number.replace(/[^0-9]/g, '');
            }
            return '0000000000';
        },
        areaCode () {
            return (/^([0-9]){3}/).exec(number)[0];
        },
        toString () {
            return number.replace(/([0-9]{3})([0-9]{3})([0-9]{3})/, '($1) $2-$3');
        }
    };
};
