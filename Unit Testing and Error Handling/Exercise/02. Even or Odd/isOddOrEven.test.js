const { expect } = require('chai');
const { isOddOrEven } = require('./isOddOrEven');

describe('Is Odd Or Even', () => {

    it ('should be undefined if number', () => {
        expect(isOddOrEven(2)).to.be.undefined;
    });

    it ('should be undefined if array', () => {
        expect(isOddOrEven([])).to.be.undefined;
    });

    it ('should be undefined if object', () => {
        expect(isOddOrEven({})).to.be.undefined;
    });

    it ('should return odd if string is odd', () => {
        expect(isOddOrEven('hi!')).to.equal('odd');
    });

    it ('should return even if string is even', () => {
        expect(isOddOrEven('hell')).to.equal('even');
    });

});