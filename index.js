import { Library } from "./lib/library.js";

const newlibrary = new Library(".book-container");
newlibrary.setupForm("#add-book-form");

// Add initial books
newlibrary.addBookToLibrary("Momotaro", "Kentaro", 20, true);
newlibrary.addBookToLibrary("Snow White", "Lisa Elsa", 400, false);
