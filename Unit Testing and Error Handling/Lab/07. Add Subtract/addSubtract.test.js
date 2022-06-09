const { expect } = require('chai');
const { createCalculator } = require('./addSubtract');


describe('Add / Subtractr', () => {

    it ('check whether it returns properties are functions', () => {
        expect(typeof createCalculator().add).to.equal('function');
        expect(typeof createCalculator().subtract).to.equal('function');
        expect(typeof createCalculator().get).to.equal('function');
    });


    it ('check if add and subtract calsulate properly', () => {
        let calc = createCalculator();
        calc.add('5');
        expect(calc.get()).to.equal(5);
    });

    it ('check if add and subtract get only numbers', () => {
        let calc = createCalculator();
        calc.add('g');
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
    });

});
