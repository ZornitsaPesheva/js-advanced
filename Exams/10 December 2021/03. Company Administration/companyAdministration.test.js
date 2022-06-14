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

        it("input valid programmer", () => {
            expect(companyAdministration.hiringEmployee('Peter', 'Programmer', 3)).to.eq('Peter was successfully hired for the position Programmer.');
        });

    })

    describe('calculateSalary', function() {
        it ('returns correctly calculated salary', () => {
            expect(companyAdministration.calculateSalary(10))
                .to.equal(150);
        })

        it ('returns correctly calculated salary with bonus', () => {
            expect(companyAdministration.calculateSalary(200))
                .to.equal(4000);
        })
        

        it ('throw Invalid hours for invelid type of parameter', () => {
            expect(() => companyAdministration.calculateSalary('string'))
                .to.throw('Invalid hours');
        })
        it ('throw invalid hours for negative number', () => {
            expect(() => companyAdministration.calculateSalary(-5))
                .to.throw('Invalid hours');
        })

    })

    describe('firedEmployee', function() {
        it ('returns correctly employees without the fired one', () => {
            expect(companyAdministration.firedEmployee(["Petar", "Ivan", "George"], 1))
            .to.equal("Petar, George");
        })

        it ('check for incorrect first parameter', () => {
            expect(() => companyAdministration.firedEmployee("George", 1))
            .to.throw("Invalid input");
        })

        it ('check whether second parameter is integer', () => {
            expect(() => companyAdministration.firedEmployee(["George"], 2.5))
            .to.throw("Invalid input");
        })
        it ('throw error if second parameter is negative', () => {
            expect(() => companyAdministration.firedEmployee(["George"], -5))
            .to.throw("Invalid input");
        })
        it ('throw error if second parameter gretaer then the employees number', () => {
            expect(() => companyAdministration.firedEmployee(["George"], 2))
            .to.throw("Invalid input");
        })
        it("NaN index", () => {
            expect(() => companyAdministration.firedEmployee(["Petar", "Ivan", "George"], 'string'))
            .to.throw('Invalid input');
        });

        it("index outside lower boundary", () => {
            expect(() => companyAdministration.firedEmployee(["Petar", "Ivan", "George"], -1))
            .to.throw('Invalid input');
        });

    })

})
