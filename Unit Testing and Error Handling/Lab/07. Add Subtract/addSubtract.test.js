const { expect } = require('chai');
const { createCalculator } = require('./addSubtract');


describe('Add / Subtractr', () => {

    let calc = createCalculator();

    it ('check whether it returns properties are functions', () => {
        expect(createCalculator()).to.haveOwnProperty('add').to.be.a('function');
        expect(createCalculator()).to.haveOwnProperty('subtract').to.be.a('function');
        expect(createCalculator()).to.haveOwnProperty('get').to.be.a('function');
    });

    it ('check if add and subtract work with numbers', () => {
        calc.add(5);
        calc.subtract(5);
        expect(calc.get()).to.be.a('number');
    });

    it ('check if add and subtract get only numbers', () => {
        calc.add('g');
        calc.subtract('s');
        expect(calc.get()).to.be.NaN;
    });

    it ('check if add and subtract work with parsed numbers', () => {
        calc.add(Number('6'));
        calc.subtract(Number('6'));
        expect(calc.get()).to.be.a('number');
    });

});
