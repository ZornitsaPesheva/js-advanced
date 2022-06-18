// https://judge.softuni.org/Contests/Practice/DownloadResource/19502

class LibraryCollection {
    constructor(capacity) {
        this.capacity = capacity;
        this.books = [];
        this.emptySlots = capacity;
    }

    addBook(bookName, bookAuthor) {
        if (this.emptySlots == 0) {
            throw new Error('Not enough space in the collection.')
        }
        this.books.push({bookName, bookAuthor, payed: false});
        this.emptySlots -= 1;
        return (`The ${bookName}, with an author ${bookAuthor}, collect.`);
    }

    payBook(bookName) {
        let book = this.books.find(b => b.bookName == bookName);
        if (!book) {
            throw new Error(`${bookName} is not in the collection.`)
        }
        if (book.payed == true) {
            throw new Error(`${bookName} has already been paid.`)
        }
        book.payed = true;
        return `${bookName} has been successfully paid.`
    }

    removeBook(bookName) {
        let bookIndex = this.books.findIndex(b => b.bookName == bookName);
        if (bookIndex == -1) {
            throw new Error(`The book, you're looking for, is not found.`)
        }
        const book = this.books[bookIndex];
        if (book.payed == false){
            throw new Error(`${bookName} need to be paid before removing from the collection.`)
        }
        this.books.splice(bookIndex, 1);
        this.emptySlots += 1;
        return `${bookName} remove from the collection.`
    }

    getStatistics(bookAuthor) {
        let result = [];
        if (!bookAuthor) {
            result.push(`The book collection has ${ this.emptySlots } empty spots left.`);
            this.books.sort((a, b) => a.bookName.localeCompare(b.bookName))
                .forEach(book => { 
                    if (book.payed == true) {
                        result.push(`${book.bookName} == ${book.bookAuthor} - Has Paid.`);
                    }
                    else {
                        result.push(`${book.bookName} == ${book.bookAuthor} - Not Paid.`);

                    }
                })
        }
        else {
            let list = this.books.filter(book => book.bookAuthor == bookAuthor);
            if (list.length == 0) {
                throw new Error(`${bookAuthor} is not in the collection.`);
            }
            list.forEach(book => { 
                if (book.payed == true) {
                    result.push(`${book.bookName} == ${book.bookAuthor} - Has Paid.`);
                }
                else {
                    result.push(`${book.bookName} == ${book.bookAuthor} - Not Paid.`);
                    console.log(book);
                }
            })
        }
        return result.join('\n');
        
    }
}

const library = new LibraryCollection(2)
console.log(library.addBook('Don Quixote', 'Miguel de Cervantes'));
console.log(library.getStatistics('Miguel de Cervantes'));

