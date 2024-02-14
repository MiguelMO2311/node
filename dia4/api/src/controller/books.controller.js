
const book = require("../models/books");


 let books =[
  {
    id_book: 1,
    id_user: 1111,
    title: 'Relato de un naúfrago',
    type: 'soft',
    author: 'Gabriel Gª Már.quez',
    price: 11.35,
    photo: 'https://imagessl2.casadellibro.com/a/l/s7/62/9788490323762.webp',
  },

  {
    id_book: 2,
    id_user: 1111,
    title: 'La Perla',
    type: 'hard',
    author: 'John Steinbeck',
    price: 16.62,
    photo: 'https://imagessl8.casadellibro.com/a/l/s7/78/9788468231778.webp',
  },

  {
    id_book: 3,
    id_user: 1111,
    title: 'Viven',
    type: 'soft',
    author: 'Piers Paul Read ',
    price: 13.30,
    photo: 'https://imagessl9.casadellibro.com/a/l/s7/69/9788490702369.webp',
  },

  {
    id_book: 4,
    id_user: 1111,
    title: 'Alas de Hierro',
    type: 'hard',
    author: 'Rebecca Yarros',
    price: 22.70,
    photo: 'https://imagessl0.casadellibro.com/a/l/s7/50/9788408284550.webp',
  },
]



function getBookById(req, res) {

  let response;

      let book = books.find((book) => book.id_book == req.query.id_book);
      if (book) {
        response = book;
      } else {
          response = { error: true, code: 200, message:`No existe el libro con id:${req.query.id_book}`,
        };
      }
    
  res.send(response)
}


function getBooks(req, res) {
 
  let response;
  
  if (books) {
      response = books;
  } else {
      response = { error: true, code: 200, message: 'No existen libros' }
  }
  res.send(response)
}

function createBook(req, res) {
  let response;

  if (!books.id) {
      books.push(req.body);
      response = { error: false, code: 200, message: 'libro creado correctamente', books}
  } else {
      response = { error: true, code: 200, message: 'el libro ya existe', books }
  }
  res.send(response)
}

function updateBook_byId(req, res) {
  let response;
  let book = books.find((book) => book.id_book == req.query.id_book);
  if (book){
    book = {
      ...book,
      ...req.body ?? {}
    }
    response = { error: false, code: 200, message: 'Libro modificado correctamente', book}
  } else {
    response = { error: true, code: 200, message: 'El libro no existe' }
  }
  books = books.map((b) => b.id_book === book.id_book ? book : b);
  response.book = books;
  res.send(response)
}

function deleteBook_byId(req, res) {
  let response;
  let book = books.find((book) => book.id_book == req.query.id_book);
  if (book) {
    books = books.filter((book) => book.id_book != req.query.id_book);
    response = { error: false, code: 200, message: 'libro eliminado correctamente', books}

  } else {
    response = { error: true, code: 200, message: 'el libro no existe', book }
  }
  res.send(response)
}


module.exports = { getBooks, getBookById, createBook, updateBook_byId, deleteBook_byId }

