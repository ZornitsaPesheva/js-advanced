const { expect } = require('chai');
const { mathEnforcer } = require('./mathEnforcer')

describe('Math Enforcer', function() {
    describe('addFive', function() {
        it ('shold return indefind for non-number input', () => {
            expect(mathEnforcer.addFive('5')).to.equal(undefined);
        })

        it ('shold return correct result for positive integer params', () => {
            expect(mathEnforcer.addFive(10)).to.equal(15);
        })

        it ('shold return correct result for negative integer params', () => {
            expect(mathEnforcer.addFive(-5)).to.equal(0);
        })

        it ('shold return correct result for floating pointr params', () => {
            expect(mathEnforcer.addFive(3.14)).to.be.closeTo(8.14, 0.01);
        })

    });

    describe('substractTen', function() {
        it ('shold return indefind for non-number input', () => {
            expect(mathEnforcer.subtractTen('test')).to.equal(undefined);
        })

        it ('shold return correct result for positive integer params', () => {
            expect(mathEnforcer.subtractTen(20)).to.equal(10);
        })

        it ('shold return correct result for negative integer params', () => {
            expect(mathEnforcer.subtractTen(-10)).to.equal(-20);
        })

        it ('shold return correct result for floating pointr params', () => {
            expect(mathEnforcer.subtractTen(3.14)).to.be.closeTo(-6.86, 0.01);
        })
    });

    describe('sum', function() {
        it('shold return indefind for invalid first param', () => {
            expect(mathEnforcer.sum('5', 5)).to.equal(undefined);
        });

        it('shold return indefind for invalid second param', () => {
            expect(mathEnforcer.sum(5, '')).to.equal(undefined);
        });
        
        it('shold return correct result for integer params', () => {
            expect(mathEnforcer.sum(5, -4)).to.equal(1);
        });
                
        it('shold return correct result for floating point params', () => {
            expect(mathEnforcer.sum(2.7, 3.4)).to.be.closeTo(6.1, 0.01)
        });
    });

});