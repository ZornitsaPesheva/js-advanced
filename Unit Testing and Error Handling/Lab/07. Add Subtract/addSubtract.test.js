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

    it ('check if add and subtract calsulate properly', () => {
        let calc = createCalculator();
        calc.add(5,5);
        calc.subtract(5,5);
        expect(calc.get()).to.equal(0);
    });

    it ('check if add and subtract get only numbers', () => {
        let calc = createCalculator();
        calc.add('g');
        calc.subtract('s');
        expect(calc.get()).to.be.NaN;
    });

    it ('check if add and subtract work with parsed numbers', () => {
        let calc = createCalculator();
        calc.add('string');
        expect(calc.get()).to.be.NaN;
    });

    it ('not work without parameters', () => {
        let calc = createCalculator();
        calc.add();
        calc.subtract();
        expect(calc.get()).to.be.NaN;
    });

    it ('value cant be changed', () => {
        let calc = createCalculator();
        expect(calc.value += 4).to.be.NaN;
    });

    it ('value cant be accesed', () => {
        let calc = createCalculator();
        expect(calc.value).to.be.undefined;
    });

    it ('returns an object', () => {
        let calc = createCalculator();
        expect(calc).to.be.a('object');
        expect(calc).to.haveOwnProperty('add').to.equal('function');
        expect(calc).to.haveOwnProperty('subtract').to.equal('function');
        expect(calc).to.haveOwnProperty('get').to.equal('function');
    });

});
