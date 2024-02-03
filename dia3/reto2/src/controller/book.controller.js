let book = null;

function wellcome(req, res) {
    res.send('Bienvenido a nuestro servidor!')
}

function getBook(req, res) {

    let response;
    if (book) {
        response = book;
    } else {
        response = { error: true, code: 200, message: 'No existe el libro' }
    }
    res.send(response)
}



function createBook(req, res) {
    let response;

    if (!book) {
        book = req.body;
        response = { error: false, code: 200, message: 'libro creado correctamente', book}
    } else {
        response = { error: true, code: 200, message: 'el libro ya existe', book }
    }
    res.send(response)
}

function updateBook(req, res) {

    let response;
    if (book) {
        book = {
            ...book,
            ...req.body ?? {}
        }
        response = {error: false, code: 200, message:'Libro modificado correctamente', book}
    } else {
        response = { error: true, code: 200, message: 'El libro ya existe'}
    }
    res.send(response)
}

function deleteBook(req, res) {
    let response;

    if (book) {
        book = null;
        response = { error: false, code: 200, message: 'libro eliminado correctamente', book }
    } else {
        response = { error: true, code: 200, message: 'el libro no existe', book }
    }
    res.send(response)
}

module.exports = { wellcome, getBook, createBook, updateBook, deleteBook };