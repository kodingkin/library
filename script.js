function Book(title, author, pages, haveRead) {
    if (!new.target) {
        throw Error("You must use the 'new' operator to call the constructor");
    }
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.haveRead = haveRead;
    this.info = function() {
      const endString = this.haveRead ? "read before" : "not read yet";
      const string = `${this.title} by ${this.author}, ${this.pages} pages, ${endString}`
      return string;
    }
}