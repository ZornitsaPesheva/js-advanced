const { expect } = require('chai');
const { createCalculator } = require('./addSubtract');


describe('Add / Subtractr', () => {


    it ('check whether it returns properties are functions', () => {
        expect(createCalculator()).to.haveOwnProperty('add').to.be.a('function');
        expect(createCalculator()).to.haveOwnProperty('subtract').to.be.a('function');
        expect(createCalculator()).to.haveOwnProperty('get');
    });

    it ('check if add and subtract work with numbers', () => {
        let calc = createCalculator();
        calc.add(5,5);
        calc.subtract(5,5);
        expect(calc.get()).to.be.a('number');
    });

    it ('check if add and subtract get only numbers', () => {
        let calc = createCalculator();
        calc.add('g');
        calc.subtract('s');
        expect(calc.get()).to.be.NaN;
    });

    it ('check if add and subtract work with parsed numbers', () => {
        let calc = createCalculator();
        calc.add(Number('6,5'));
        calc.subtract(Number('6,5'));
        expect(calc.get()).to.be.a('number');
    });
});
