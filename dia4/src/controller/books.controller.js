
let books = [
    { id: 1, title: "El Quijote", author: "Miguel de Cervantes" },
    { id: 2, title: "La Celestina", author: "Fernando de Rojas" },
    { id: 3, title: "La Regenta", author: "Leopoldo Alas Clarín" }
];

function getBookById(req, res) {

    let response;
 
        let book = books.find((book) => book.id == req.query.id);
        if (book) {
          response = book;
        } else {
            response = { error: true, code: 200, message:`No existe el libro con id:${req.query.id}`,
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
    let book = books.find((book) => book.id == req.query.id);
    if (book){
      book = {
        ...book,
        ...req.body ?? {}
      }
      response = { error: false, code: 200, message: 'Libro modificado correctamente', book}
    } else {
      response = { error: true, code: 200, message: 'El libro no existe' }
    }
    books = books.map((b) => b.id === book.id ? book : b);
    response.books = books;
    res.send(response)
  }

function deleteBook_byId(req, res) {
    let response;
    let book = books.find((book) => book.id == req.query.id);
    if (book) {
      books = books.filter((book) => book.id != req.query.id);
      response = { error: false, code: 200, message: 'libro eliminado correctamente', books}
  
    } else {
      response = { error: true, code: 200, message: 'el libro no existe', book }
    }
    res.send(response)
  }
  

module.exports = { getBooks, getBookById, createBook, updateBook_byId, deleteBook_byId }