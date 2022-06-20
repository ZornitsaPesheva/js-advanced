const { expect } = require('chai');
const { testNumbers } = require('./testNumbers')

describe('testNumbers', () => {
    describe('sumNumbers', () => {
        it('returns undefined if parameters are not numbers', () => {
            expect(testNumbers.sumNumbers('4', 5)).to.equal(undefined);
        })
        it('returns undefined if parameters are not numbers', () => {
            expect(testNumbers.sumNumbers(5, 'text')).to.equal(undefined);
        })
        it('returns correct sum', () => {
            expect(testNumbers.sumNumbers(5, 3)).to.equal('8.00');
        })
    })

    describe('numberChecker', () => {
        it('returns not a number', () => {
            expect(() => testNumbers.numberChecker('text').to.trow('The input is not a number!'))
        })
        it ('returns corret even', () => {
            expect(testNumbers.numberChecker(4)).to.equal('The number is even!')
        })
        it ('returns corret odd', () => {
            expect(testNumbers.numberChecker(5)).to.equal('The number is odd!')
        })
    })

    describe('averageSumArray', () => {
        it ('returns correct avarage', () => {
            expect(testNumbers.averageSumArray([2, 4, 6])).to.equal(4);
        })
    })
})