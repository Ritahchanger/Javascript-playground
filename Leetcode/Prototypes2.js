function Book(title,author,ISBN){

    this.title = title;

    this.author = author;

    this.ISBN = ISBN;


    this.isAvailable = true;


}

Book.prototype.checkAvailability = function(){

    return this.isAvailable ? `${this.title} is not available` :   `${this.title} is available `

}
Book.prototype.checkBook = function (){

    if(this.isAvailable){

        this.isAvailable = false;

        return `You have borrowed "${this.title}" is currently borrowed`;

    }else{

        return `Sorry, "${this.title}" is already borrowed`

    }

}

Book.prototype.returnBook = function(){


    if(!this.isAvailable){

        this.isAvailable = true;

        return `You have returned "${this.title}"`

    }else{

        return `"${this.title}" was not borrowed`;


    }


}

function Library(name){

    this.name = name;

    this.books = [];

}


Library.prototype.addBook = function(book){

    this.books.push(book)

}
Library.prototype.listBooks = function(){

    const book = this.books.map(book=>book.title.toLowerCase() == title.toLowerCase());

    return book ? book.checkAvailability() : `Book titled "${title}" not found in the library`;
}


const cityLibrary = new Library("City Library");

const book1 = new Book("The Great GatsBy","D. Dennis Peter","er3e7823238");



console.log(cityLibrary.addBook(book1))