module.exports = function (seconds) {
    'use strict';

    const divideSecondsBy = (divider) => {
        return parseFloat((seconds / divider).toFixed(2));
    };

    const spaceTimes = {
        earth: 31557600,
        jupiter: 374222565,
        mars: 59359776,
        mercury: 7600526,
        neptune: 5196280668,
        saturn: 928792570,
        uranus: 2652994592,
        venus: 19411026
    };

    return {
        seconds: seconds,
        onEarth () {
            return divideSecondsBy(spaceTimes.earth);
        },
        onJupiter () {
            return divideSecondsBy(spaceTimes.jupiter);
        },
        onMars () {
            return divideSecondsBy(spaceTimes.mars);
        },
        onMercury () {
            return divideSecondsBy(spaceTimes.mercury);
        },
        onNeptune () {
            return divideSecondsBy(spaceTimes.neptune);
        },
        onSaturn () {
            return divideSecondsBy(spaceTimes.saturn);
        },
        onUranus () {
            return divideSecondsBy(spaceTimes.uranus);
        },
        onVenus () {
            return divideSecondsBy(spaceTimes.venus);
        }
    };
};
