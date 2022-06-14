const { expect } = require('chai');
const { bookSelection } = require('./bookSelection');

describe('Book Selection', function() {
    describe('isGenreSuitable', function() {
        it ('Fairy Tales are sutable for 5 years old', () => {
            expect(bookSelection.isGenreSuitable('Fairy Tales', 5)).to.equal('Those books are suitable');
        })
        it ('Thrillers are not sutable for 5 years old', () => {
            expect(bookSelection.isGenreSuitable('Thriller', 5)).to.equal('Books with Thriller genre are not suitable for kids at 5 age');
        })
    });

    describe('isItAffordable', function() {
        it ('Book is affordable', () => {
            expect(bookSelection.isItAffordable(15, 20)).to.equal('Book bought. You have 5$ left');
        });
        it ('Book is not affordable', () => {
            expect(bookSelection.isItAffordable(15, 10)).to.equal('You don\'t have enough money');
        });
    });

    describe('suitableTitles', function() {
        it ('Sutable books returns array', () => {
            expect(bookSelection.suitableTitles([
                { title: "The Da Vinci Code", genre: "Thriller" }], 'Thriller')).to.deep.equal(['The Da Vinci Code']);
        })
        it ('Sutable books returns array', () => {
            expect(bookSelection.suitableTitles([], 'Thriller')).to.deep.equal([]);
        })
    });
})