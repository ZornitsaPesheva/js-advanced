const { expect } = require('chai');
const { lookupChar } = require('./charLookUp')

describe('Look Up char', () => {

    it ('check whether first parameter is valid', () => {
        expect(lookupChar(1, 1)).to.equal(undefined);
    });

    it ('check whether second parameter is valid', () => {
        expect(lookupChar('hello', 'test')).to.equal(undefined);
    });

    it ('check whether second parameter is valid integer', () => {
        expect(lookupChar('hello', 0.1)).to.equal(undefined);
    });

    it ('check value with index bigger than string length', () => {
        expect(lookupChar('hi', 10)).to.equal('Incorrect index');
    });

    it ('check value with negative index', () => {
        expect(lookupChar('hi', -10)).to.equal('Incorrect index');
    });

    it ('check value with valid params', () => {
        expect(lookupChar('hello', 1)).to.equal('e');
    });

});




