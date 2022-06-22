const { expect } = require('chai')
const { numberOperations } = require('./03. Number Operations_Resources')

describe('numberOperations', function() {
    describe('powNumber', function() {
        it('retuns correct pow', () => {
            expect(numberOperations.powNumber(3)).to.equal(9);
        })
    })
    describe('numberChecker', function() {
        it('retuns correct numberChecker', () => {
            expect(() => numberOperations.numberChecker('hi')).to.throw('The input is not a number!');
        })
        it('retuns correct numberChecker', () => {
            expect(numberOperations.numberChecker(50)).to.equal( 'The number is lower than 100!');
        })
        it('retuns correct numberChecker', () => {
            expect(numberOperations.numberChecker(100)).to.equal('The number is greater or equal to 100!');
        })
        it('retuns correct numberChecker', () => {
            expect(numberOperations.numberChecker(120)).to.equal('The number is greater or equal to 100!');
        })
    })

})