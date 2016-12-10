module.exports = function () {

    'use strict';

    const count = (num, lowercase) => {
        return (num === 0 ? (lowercase === true ? 'n' : 'N') + 'o more' : (num === -1 ? '99' : num));
    };

    const bottle = (num, extended) => {
        return `bottle${num !== 1 ? 's' : ''} of beer${extended === true ? ' on the wall' : ''}`;
    };

    const take = (num) => {
        return (num === 0 ? 'Go to the store and buy some more' : 'Take ' + (num === 1 ? 'it' : 'one') + ' down and pass it around');
    };

    return {
        verse (num) {
            return `${count(num)} ${bottle(num, true)}, ${count(num, (num === 0))} ${bottle(num)}.\n${take(num)}, ${count(num-1, (num === 1))} ${bottle(num - 1, true)}.\n`;
        },
        sing (begin, end = 0) {
            let verses = [];
            for (let i = begin; i >= end; i--) {
                verses.push(this.verse(i));
            };
            return verses.join('\n');
        }
    }
};
