const { expect } = require('chai');
const { bookSelection } = require('./bookSelection');

describe('Book Selection', function() {
    describe('isGenreSuitable', function() {
        it ('', () => {
            expect(bookSelection.isGenreSuitable('man', 5)).to.equal('Those books are suitable');
        })
    })

    describe('isItAffordable', function() {
    })

    describe('suitableTitles', function() {
    })
})