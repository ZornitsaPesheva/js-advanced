const { expect } = require('chai');
const { PaymentPackage } = require('./PaymentPackage')

describe('PaymentPackage', function() {
    it('throw error for missing parameters', () => {
        expect(new PaymentPackage('HR Services')).to.throw('Value must be a non-negative number');
    })
})