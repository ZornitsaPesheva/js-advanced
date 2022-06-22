const { expect } = require('chai');
const { dealership } = require('./03. Dealershipл');

describe('dealership', function() {
    describe('newCarCost', function() {
        it('return correct newCarCost', function() {
            expect(dealership.newCarCost('Audi A4 B8', 65000)).to.equal(50000);
        })
        it('return correct newCarCost', function() {
            expect(dealership.newCarCost('other car', 65000)).to.equal(65000);
        })
    })
    describe('carEquipment', function() {
        it('return correct equipment', function() {
            expect(dealership.carEquipment)
        })
    })
})