'use strict';

const _usedNames = {};

module.exports = function () {
    'use strict';

    const generateName = () => {
        const str = () => String.fromCharCode(Math.floor(Math.random() * 25) + 65);
        const num = Math.floor(Math.random() * 899) + 100;
        const name = str() + str() + num;
        if (typeof _usedNames[name] === 'undefined') {
            _usedNames[name] = true;
            return name;
        } else {
            return generateName();
        }
    };

    const _name = generateName();

    return {
        name: _name,
        reset () {
            this.name = generateName();
        }
    };
};
