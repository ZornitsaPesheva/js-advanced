const { expect } = require('chai');
const { isSymmetric } = require('./symmetry');

describe('Symetry Checker', () => {
    it ('works with symetric numeric numeric array', () => {
        expect(isSymmetric([1, 2, 2, 1])).to.be.true;
    })

    it ('returns false for non-symetric numeric array', () => {
        expect(isSymmetric([1, 2, 3])).to.be.false;
    })

    it ('returns false for non array', () => {
        expect(isSymmetric(5)).to.be.false;
    })

    if ('works with symetric odd-length array', () => {
        expect(isSymmetric(['a', 'b', 'b', 'ba'])).to.be.true;
    })
})
