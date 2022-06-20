const { expect } = require('chai');
const { library } = require('./library');

describe('library', function () {
    describe('calcPriceOfBook', function () {
        it('calc correct for older books', () => {
            expect(library.calcPriceOfBook('my book', 2000))
                .to.equal('Price of my book is 20.00');
        })
        it('book not string', () => {
            expect(() => library.calcPriceOfBook(2, 2000))
                .to.throw('Invalid input');
        })
        it('number not integer', () => {
            expect(() => library.calcPriceOfBook('book', 20.5))
                .to.throw('Invalid input');
        })
        it('number not number', () => {
            expect(() => library.calcPriceOfBook('book', '20.5'))
                .to.throw('Invalid input');
        })
        it('calc year < 1980', () => {
            expect(library.calcPriceOfBook('my book', 1900))
                .to.equal('Price of my book is 10.00');
        })
        it('calc year = 1980', () => {
            expect(library.calcPriceOfBook('my book', 1980))
                .to.equal('Price of my book is 10.00');
        })
    })

    describe('findBook', function () {
        it('error for empty array', () => {
            expect(() => library.findBook([], 'my book'))
                .to.throw('No books currently available');
        })
        it('find book in array', () => {
            expect(library.findBook(['my book', 'your book'], 'my book'))
                .to.equal('We found the book you want.');
        })
        it('dont find book in array', () => {
            expect(library.findBook(['my book', 'your book'], 'his book'))
                .to.equal('The book you are looking for is not here!');
        })
    })

    describe('arrangeTheBooks', function () {
        it('invalid input for not integer', () => {
            expect(() => library.arrangeTheBooks(5.5))
                .to.throw('Invalid input');
        })
        it('invalid input for negativee integer', () => {
            expect(() => library.arrangeTheBooks(-5))
                .to.throw('Invalid input');
        })
        it('great job', () => {
            expect(library.arrangeTheBooks(5))
                .to.equal('Great job, the books are arranged.');
        })
        it('great job', () => {
            expect(library.arrangeTheBooks(40))
                .to.equal('Great job, the books are arranged.');
        })
        it('Insufficient space, more shelves need to be purchased.', () => {
            expect(library.arrangeTheBooks(45))
                .to.equal('Insufficient space, more shelves need to be purchased.');
        })
    })

})
