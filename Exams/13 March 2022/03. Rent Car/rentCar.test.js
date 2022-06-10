const { expect } = require('chai');
const { rentCar } = require('./rentCar');

describe('Rent Car', function() {
    describe('searchCar', function() {
        it ('return correct data whether the model is in the shop', () => {
            expect(rentCar.searchCar(["Volkswagen", "BMW", "Audi"], 'Volkswagen'))
            .to.deep.equal('There is 1 car of model Volkswagen in the catalog!')
        })

        it ('check if shop data is array of strings', () => {
            expect(function() {
                rentCar.searchCar('fdgdf', 'Volkswagen').to.throw('Invalid input!')
            })
        })
    });

    describe('calculatePriceOfCar', function() {

    });
    
    describe('checkBudget', function() {

    });
});
