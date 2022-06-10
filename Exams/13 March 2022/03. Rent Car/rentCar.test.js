const { expect } = require('chai');
const { rentCar } = require('./rentCar');

describe('Rent Car', function () {
    describe('searchCar', function () {
        it('return correct data whether the model is in the shop', () => {
            expect(rentCar.searchCar(["Volkswagen", "BMW", "Audi"], 'Volkswagen'))
                .to.deep.equal('There is 1 car of model Volkswagen in the catalog!')
        })
        
        it('check if shop data is array of strings', () => {
            expect(function () {
                rentCar.searchCar('fdgdf', 'Volkswagen').to.throw('Invalid input!')
            })
        })
        it('check if model value is array of strings', () => {
            expect(function () {
                rentCar.searchCar(["Volkswagen", "BMW", 1], 'Volkswagen').to.throw('Invalid input!')
            })
        })
        
        it("happy path for searchCar", () => {
            expect(rentCar.searchCar(["Volkswagen", "BMW", "Audi"], "Volkswagen")).to.equal("There is 1 car of model Volkswagen in the catalog!");
        });

          it("test the model", () => {
            expect(function () {
              rentCar.searchCar(["Volkswagen", "BMW"], "Nissan")
            }).to.throw(`There are no such models in the catalog!`);
          });
        
    });

    describe('calculatePriceOfCar', function () {
        it('check if model is valid', () => {
            expect(function () {
                rentCar.calculatePriceOfCar(5, 5).to.throw('Invalid input!')
            })
        })
        
        it('check if days are valid', () => {
            expect(function () {
                rentCar.calculatePriceOfCar("Volkswagen", 'string').to.throw('Invalid input!')
            })
        })
        it('returns correct data on valid input', () => {
            expect(function () {
                rentCar.calculatePriceOfCar("Volkswagen", 2).to.equal('You choose Volkswagen and it will cost $40!')
            })
        })
        
        it('check for such model', () => {
            expect(function () {
                rentCar.calculatePriceOfCar("Nissan", 2).to.throw('No such model in the catalog!')
            })
        })
        
        it("happy path", () => {
            expect(rentCar.calculatePriceOfCar("Volkswagen", 2)).to.equal("You choose Volkswagen and it will cost $40!");
        });

        
    });

    describe('checkBudget', function () {
        it('check if costPerDay is a valid parameter', () => {
            expect(function () {
                rentCar.checkBudget('invalid', 2, 40).to.throw('Invalid input!')
            })
        })
        it('check if days is a valid parameter', () => {
            expect(function () {
                rentCar.checkBudget(20, 'invalid', 40).to.throw('Invalid input!')
            })
        })
        it('check if budget is a valid parameter', () => {
            expect(function () {
                rentCar.checkBudget(20, 2, 'invalid').to.throw('Invalid input!')
            })
        })
        it('check if budget enough', () => {
            expect(function () {
                rentCar.checkBudget(20, 2, 50).to.equal('You rent a car!`')
            })
        })
        it('check if budget enough', () => {
            expect(function () {
                rentCar.checkBudget(20, 2, 30).to.equal('You need a bigger budget!')
            })
        })
        
        it("happy path", () => {
            expect(rentCar.checkBudget(20, 1, 20)).to.equal("You rent a car!");
        });
        it("budget param to be bigger", () => {
            expect(rentCar.checkBudget(22, 1, 21)).to.equal("You need a bigger budget!");
        });
    });
});