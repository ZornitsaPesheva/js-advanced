const { expect } = require('chai');
const { sum } = require('./sum');

describe('sum checker', () => {
    it ('works with array of numbers', () => {
        expect(sum([2, 2, 1])).to.equal(5);
    });
    it ('works with negative numbers', () => {
        expect(sum([-1, -3, 5])).to.equal(1);
    });
    it ('works with one number', () => {
        expect(sum([0])).to.equal(0);
    });
});
