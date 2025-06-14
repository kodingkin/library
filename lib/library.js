import { Book } from "./book.js";

export class Library {
    constructor(containerSelector) {
        this.library = [];
        this.container = document.querySelector(containerSelector);
    }
    render() {
        this.container.innerHTML = "";
        this.library.forEach(book => {
            const bookElm = this.createBookElement(book);
            this.container.appendChild(bookElm);
        })
    }
    addBookToLibrary(title, author, pages, haveRead) {
        const id = this.generateUUID();
        const newBook = new Book (title, author, pages, haveRead, id);
        this.library.push(newBook);
        this.render();
        return newBook;
    }
    removeBookFromLibrary(id) {
        const theBookIndex = this.library.findIndex(book => book.id === id);
        this.library.splice(theBookIndex, 1);
        this.render();
    }
    changeHaveRead(id) {
        const book = this.library.find(book => book.id === id);
        book.readBook();
        this.render();
    }
    createBookElement(book) {
        const bookElm = document.createElement("div");
        bookElm.classList.add("book");
        bookElm.dataset.id = book.id;
        bookElm.textContent = book.info();

        const deleteButton = document.createElement("div");
        deleteButton.classList.add("delete");
        deleteButton.dataset.id = book.id;
        deleteButton.textContent = "delete book";
        deleteButton.addEventListener("click", () => this.removeBookFromLibrary(book.id));

        const readButton = document.createElement("div");
        readButton.classList.add("read");
        readButton.dataset.id = book.id;
        readButton.textContent = "read / unread";
        readButton.addEventListener("click", () => this.changeHaveRead(book.id));

        bookElm.appendChild(deleteButton);
        bookElm.appendChild(readButton);
        return bookElm;
    }
    setupForm(formSelector) {
        const form = document.querySelector(formSelector);
        form.addEventListener("submit", (e) => {
            e.preventDefault();
            const title = form.querySelector("#name").value;
            const author = form.querySelector("#author").value;
            const pages = parseInt(form.querySelector("#page-number").value);
            const haveRead = form.querySelector("#have-read").value === "true";
            this.addBookToLibrary(title, author, pages, haveRead);
            form.reset();
        });
    }
    generateUUID() {
        return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
            const r = Math.random() * 16 | 0, v = c === 'x' ? r : (r & 0x3 | 0x8);
            return v.toString(16);
        });
    }
}

