class Book {
    constructor(id, title, author, year) {
      this.id = id;
      this.title = title;
      this.author = author;
      this.year = year;
    }
  }
  // const book = new Book [{id: 0, title:'The Catcher in the Rye', author: 'J.D. Salinger', year:  1951}];



  let books = [
    { id: 1, title: "El Quijote", author: "Miguel de Cervantes", year: 1605 },
    { id: 2, title: "La Celestina", author: "Fernando de Rojas", year: 1499 },
    { id: 3, title: "La Regenta", author: "Leopoldo Alas Clarín", year: 1884 }
  ];

exports  = {Book};
  