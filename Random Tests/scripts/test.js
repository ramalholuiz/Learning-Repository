function Book(title, pages, isbn) {
  this.title = title;
  this.pages = pages;
  this.isbn = isbn;
  this.printIsbn = function () {
    console.log(this.isbn);
  };
}

let book1 = new Book(
  "Estruturas de dados e algoritmos com javascript",
  406,
  "978-85-7522-693-3"
);
console.log(book1);

Book.prototype.printTitle = function () {
  console.log(this.title);
};
book1.printTitle();
book1.printIsbn();
