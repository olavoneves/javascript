function CreateBook(title, author, pages) {

        this.bookTitle = title;
        this.bookAuthor = author;
        this.bookPages = pages;
        this.printBook = function() {
            console.log('Printing...')
    }
}

const book01 = new CreateBook('Capitães da Areia', 'Jorge Amado', 274)
const book02 = new CreateBook('A Hora da Estrela', 'Clarice Lispector', 90)
const book03 = new CreateBook('As Colinas Ocas', 'Mary Stewart', 600)

book01.color = 'aqua'

console.log(book01)
console.log(book02)
console.log(book03)