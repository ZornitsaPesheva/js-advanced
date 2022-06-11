const { expect } = require('chai');
const { flowerShop } = require('./flowerShop');


describe('Flower Shop', function () {
    describe('calcPriceOfFlowers', function () {

        it('returns correct result for valid data', () => {
            expect(flowerShop.calcPriceOfFlowers('some flower', 2, 3))
                .to.equal('You need $6.00 to buy some flower!')
        })

        it('returns invalid error for invalid flower', () => {
            expect( function() {
                flowerShop.calcPriceOfFlowers(2, 2, 3).to.throw('Invalid input!');
            }) 
        })

        it('returns invalid error for invalid price', () => {
            expect( function() {
                flowerShop.calcPriceOfFlowers(2, 'string', 3).to.throw('Invalid input!');
            }) 
        })

        it('returns invalid error for invalid price', () => {
            expect( function() {
                flowerShop.calcPriceOfFlowers(2, 3, 'string').to.throw('Invalid input!');
            }) 
        })
    })
    
    describe('checkFlowersAvailable', function () {

        it('returns correct if flower is not present', () => {
            expect(flowerShop.checkFlowersAvailable('some flower', ["Rose", "Lily", "Orchid"]))
                .to.equal('The some flower are sold! You need to purchase more!')
        })

        it('returns correct if flower is present', () => {
            expect(flowerShop.checkFlowersAvailable('Rose', ["Rose", "Lily", "Orchid"]))
                .to.equal('The Rose are available!')
        })
    })

    describe('sellFlowers', function () {

        it('returns correct if flower is not present', () => {
            expect(flowerShop.sellFlowers(["Rose", "Lily", "Orchid"]))
                .to.equal('The some flower are sold! You need to purchase more!')
        })

        it('returns correct if flower is present', () => {
            expect(flowerShop.sellFlowers('Rose', ["Rose", "Lily", "Orchid"]))
                .to.equal('The Rose are available!')
        })
    })


})