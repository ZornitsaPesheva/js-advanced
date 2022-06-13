const { expect } = require('chai');
const { PaymentPackage } = require('./PaymentPackage')

describe('PaymentPackage', function() {
    it('throw error for missing parameters', () => {
        expect(() => new PaymentPackage('HR Services')).to.throw('Value must be a non-negative number');
    })

    it('throw error for unproper name type', () => {
        expect(() => new PaymentPackage(1, 1500)).to.throw('Name must be a non-empty string');
    })

    it('throw error for empty string for name', () => {
        expect(() => new PaymentPackage('',100)).to.throw('Name must be a non-empty string');
    })

    it('throw error for unproper type of value', () => {
        expect(() => new PaymentPackage('HR Services', 'string')).to.throw('Value must be a non-negative number');
    })

    it('throw error for negative number for value', () => {
        expect(() => new PaymentPackage('HR Services', -100)).to.throw('Value must be a non-negative number');
    })
})