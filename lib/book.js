export class Book {
    constructor(title, author, pages, haveRead, id) {
        this.title = title;
        this.author = author;
        this.pages = pages;
        this.haveRead = haveRead;
        this.id = id;
    }
    info() {
        const endString = this.haveRead ? "read before" : "not read yet";
        return `${this.title} by ${this.author}, ${this.pages} pages, ${endString}`
    }
    readBook() {
        this.haveRead = !this.haveRead;
    }
}

