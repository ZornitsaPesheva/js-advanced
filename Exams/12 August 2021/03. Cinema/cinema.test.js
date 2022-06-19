const { expect } = require('chai');
const { cinema } = require('./cinema');
describe("cinema", function() {
    describe("showMovies", function() {
        it("retun there are no movies", function() {
            expect(cinema.showMovies([])).to.equal('There are currently no movies to show.');
        });
        it("retun array of movies", function() {
            expect(cinema.showMovies(['King Kong', 'The Tomorrow War', 'Joker'])).to.equal('King Kong, The Tomorrow War, Joker');
        });
        it("retun array of movies", function() {
            expect(cinema.showMovies(['King Kong'])).to.equal('King Kong');
        });
     });

    describe("ticketPrice", function() {
        it("retun there are no movies", function() {
            expect(cinema.ticketPrice('Premiere')).to.equal(12.00);
        });
        it("retun there are no movies", function() {
            expect(cinema.ticketPrice('Normal')).to.equal(7.50);
        });
        it("retun there are no movies", function() {
            expect(cinema.ticketPrice('Discount')).to.equal(5.50);
        });
        it('return invalit proj type', function() {
            expect(() => cinema.ticketPrice('type')).to.throw('Invalid projection type.')
        })
    });

    describe('swapSeatsInHall', function() {
        it('return unsecssesful on number not exist', function() {
            expect(cinema.swapSeatsInHall(31, 15)).to.equal('Unsuccessful change of seats in the hall.');
        })
        it('return unsecssesful on number not exist', function() {
            expect(cinema.swapSeatsInHall(15, 31)).to.equal('Unsuccessful change of seats in the hall.');
        })
        it('return unsecssesful on number not eintegert', function() {
            expect(cinema.swapSeatsInHall(15.5, 10)).to.equal('Unsuccessful change of seats in the hall.');
        })
        it('return unsecssesful on number not eintegert', function() {
            expect(cinema.swapSeatsInHall(15, 10.5)).to.equal('Unsuccessful change of seats in the hall.');
        })
        it('return unsecssesful on number not eintegert', function() {
            expect(cinema.swapSeatsInHall(0, 10)).to.equal('Unsuccessful change of seats in the hall.');
        })
        it('return unsecssesful on number not eintegert', function() {
            expect(cinema.swapSeatsInHall(15, 0)).to.equal('Unsuccessful change of seats in the hall.');
        })
        it('successful', function() {
            expect(cinema.swapSeatsInHall(15, 10)).to.equal('Successful change of seats in the hall.');
        })
        it('successful', function() {
            expect(cinema.swapSeatsInHall(1, 20)).to.equal('Successful change of seats in the hall.');
        })

    });

});