const myLibrary = [];

function Book(title, author, pages, haveRead, id) {
    if (!new.target) {
        throw Error("You must use the 'new' operator to call the constructor");
    }
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.haveRead = haveRead;
    this.id = id;
}

Book.prototype.info = function() {
    const endString = this.haveRead ? "read before" : "not read yet";
    return `${this.title} by ${this.author}, ${this.pages} pages, ${endString}`
}

function addBookToLibrary(myLibrary, title, author, pages, haveRead) {
    const id = crypto.randomUUID();
    const newBook = new Book (title, author, pages, haveRead, id);
    myLibrary.push(newBook);
    return newBook;
}

function displayLibrary(myLibrary) {
    myLibrary.forEach(book => {
        const container = document.querySelector(".book-container");
        const bookElm = createBook(book);
        container.appendChild(bookElm);
    });
}

function removeBook(myLibrary, id) {
    const theBookIndex = myLibrary.findIndex(book => book.id === id);
    console.log(theBookIndex)
    myLibrary.splice(theBookIndex, 1);
}

function changeHaveReadStatus(myLibrary, id, haveRead) {
    const theBookIndex = myLibrary.findIndex(book => book.id === id);
    myLibrary[theBookIndex].haveRead = haveRead;
}

function createBook(book) {
    const bookElm = document.createElement("div");
    bookElm.classList.add("book");
    bookElm.setAttribute("book-id", book.id);
    bookElm.textContent = book.info();
    const deleteButton = document.createElement("div");
    deleteButton.classList.add("delete");
    deleteButton.setAttribute("book-id", book.id);
    deleteButton.textContent = "delete book";
    deleteButton.addEventListener("click", deleteHandler);
    const haveReadButton = document.createElement("div");
    haveReadButton.classList.add("read");
    haveReadButton.setAttribute("book-id", book.id);
    haveReadButton.textContent = "read / unread";
    bookElm.appendChild(deleteButton);
    bookElm.appendChild(haveReadButton);
    return bookElm;
}

function reloadLibrary() {
    const container = document.querySelector(".book-container");
    const books = container.querySelectorAll(".book");
    books.forEach(book => {
        book.remove();
    })
    myLibrary.forEach(book => {
        const bookElm = createBook(book);
        container.appendChild(bookElm);
    })
}

function deleteHandler() {
    const id = this.getAttribute("book-id");
    removeBook(myLibrary, id);
    reloadLibrary();
    return;
}

const momotaro = addBookToLibrary(myLibrary, "momotaro", "kentaro", 20, true);
const snowWhite = addBookToLibrary(myLibrary, "snowWhite", "lisa elsa", 400, false);
displayLibrary(myLibrary);
// console.log(myLibrary);
const books = document.querySelectorAll(".book");

