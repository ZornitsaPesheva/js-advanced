const { expect } = require('chai');
const {companyAdministration } = require('./companyAdministration');

describe('Company Administration', function() {
    describe('hiringEmployee', function() {
        it ('returns correct result for different positions', () => {
            expect(bookSelection.hiringEmployee('Fairy Tales', 'position', 5)).to.throw('We are not looking for workers for this position.');
        })
    })
})
