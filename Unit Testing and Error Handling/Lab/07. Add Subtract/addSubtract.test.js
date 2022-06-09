const { expect } = require('chai');
const { createCalculator } = require('./addSubtract');

describe('Add / Subtractr', () => {
    it ('check whether it returns properties are functions', () => {
        expect(createCalculator()).to.haveOwnProperty('add').to.be.a('function');
        expect(createCalculator()).to.haveOwnProperty('subtract').to.be.a('function');
        expect(createCalculator()).to.haveOwnProperty('get').to.be.a('function');
    });

    it ('check if it returns a number', () => {
        expect(createCalculator().get()).to.be.a('number');
    });



});
