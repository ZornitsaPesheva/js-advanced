const { expect } = require('chai');
const { testNumbers } = require('./testNumbers')

describe('testNumbers', () => {
    describe('sumNumbers', () => {
        it('returns undefined if parameters are not numbers', () => {
            expect(testNumbers.sumNumbers('4', 5)).to.equal(undefined);
        })
    })
})