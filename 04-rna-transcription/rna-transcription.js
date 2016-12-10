module.exports = function () {
    return {
        toRna (DNA) {
            const map = {
                G: 'C',
                C: 'G',
                T: 'A',
                A: 'U'
            };
            return DNA.split('').map((obj) => map[obj]).join('');
        }
    }
};
