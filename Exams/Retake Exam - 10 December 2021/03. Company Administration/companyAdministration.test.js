const { expect } = require('chai');
const { companyAdministration } = require('./companyAdministration')

describe('Company Administration', function() {
    describe('hiringEmployee', function() {
        it ('returns correct result for different positions', () => {
            expect(() => (companyAdministration.hiringEmployee('John Smith', 'position', 5)))
                .to.throw('We are not looking for workers for this position.');
        })

        it ('returns correctly successfully hired for the positions', () => {
            expect(companyAdministration.hiringEmployee('John Smith', 'Programmer', 5))
                .to.equal(`John Smith was successfully hired for the position Programmer.`);
        })
        
        it ('returns correctly not hired for the positions', () => {
            expect(companyAdministration.hiringEmployee('John Smith', 'Programmer', 2))
                .to.equal(`John Smith is not approved for this position.`);
        })
    })

    describe('calculateSalary', function() {
        
        it ('returns correctly calculated salary', () => {
            expect(companyAdministration.calculateSalary(10))
                .to.equal(150);
        })
        it ('returns correctly calculated salary', () => {
            expect(companyAdministration.calculateSalary(200))
                .to.equal(4000);
        })
    })

})
