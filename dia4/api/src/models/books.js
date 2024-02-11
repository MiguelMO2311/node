
class Book {
    constructor(id_book, id_user, title, type, author, price, photo) {
    this.id_book = id_book;
    this.id_user = id_user;
    this.title = title;
    this.type = type;
    this.author = author;
    this.price = price;
    this.photo = photo;
  }
}
  // const book = new Book [{id: 0, title:'The Catcher in the Rye', author: 'J.D. Salinger', year:  1951}];

  module.exports = Book;

