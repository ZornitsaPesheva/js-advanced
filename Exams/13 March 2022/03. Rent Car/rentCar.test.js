const { expect } = require('chai');
const { rentCar } = require('./rentCar');

describe('Rent Car', function () {
    describe('searchCar', function () {
        it('return correct data whether the model is in the shop', () => {
            expect(rentCar.searchCar(["Volkswagen", "BMW", "Audi"], 'Volkswagen'))
                .to.deep.equal('There is 1 car of model Volkswagen in the catalog!')
        })

        it("happy path for searchCar", () => {
            expect(rentCar.searchCar(["Volkswagen", "BMW", "Audi"], "Volkswagen"))
                .to.equal("There is 1 car of model Volkswagen in the catalog!");
        });

          it("test the model", () => {
            expect(function () {
              rentCar.searchCar(["Volkswagen", "BMW"], "Nissan")
            }).to.throw(`There are no such models in the catalog!`);
          });
        
    });

    describe('calculatePriceOfCar', function () {
        it("happy path", () => {
            expect(rentCar.calculatePriceOfCar("Volkswagen", 2))
                .to.equal("You choose Volkswagen and it will cost $40!");
        });

        
    });

    describe('checkBudget', function () {
        it("happy path", () => {
            expect(rentCar.checkBudget(20, 1, 20)).to.equal("You rent a car!");
        });
        it("budget param to be bigger", () => {
            expect(rentCar.checkBudget(22, 1, 21)).to.equal("You need a bigger budget!");
        });
    });
});