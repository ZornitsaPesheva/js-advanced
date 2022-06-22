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
            expect(dealership.carEquipment(['heated seats', 'sliding roof', 'sport rims', 'navigation'], [1, 2]))
                .to.deep.equal(['sliding roof', 'sport rims']);
        })
    })
    describe('euroCategory', function() {
        it('return correct message', function() {
            expect(dealership.euroCategory(5)).to.equal('We have added 5% discount to the final price: 14250.')
        })
        it('return correct message', function() {
            expect(dealership.euroCategory(4)).to.equal('We have added 5% discount to the final price: 14250.')
        })
        it('return correct message', function() {
            expect(dealership.euroCategory(3)).to.equal('Your euro category is low, so there is no discount from the final price!')
        })
    })
})