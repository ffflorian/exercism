'use strict';

module.exports = {
    parse (text) {
        return text.split(/[a-z](?=[A-Z])|[- ]/).reduce((result, word) => {
            return result += word.charAt(0);
        }, '').toUpperCase();
    }
};
