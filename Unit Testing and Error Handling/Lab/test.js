const { expect } = require(chai);
const { sum } =  require('...')

describe('Test Suite', () => {
    it('test 1', () => {
        console.log('first test');
    });

    it ('test 2', ()=> {
        throw new Error('it didn\'t work');
    })
});