const axios = require ('axios');
const pokemon = require ('../models/pokemon');

// function getBookById(req, res) {

//     let response;
 
//         let book = books.find((book) => book.id == req.query.id);
//         if (book) {
//           response = book;
//         } else {
//             response = { error: true, code: 200, message:`No existe el libro con id:${req.query.id}`,
//           };
//         }
      
//     res.send(response)
// }


async function getPokemon(request, response) {

    const id = request.query.id
    const url = `https://pokeapi.co/api/v2/pokemon/${id}`
   
    try{
        const data = await axios.get (url)
        // *** este console.log lo hace en el terminal o consola***
        console.log (data)

        const res = {
            name: data.data.name,
            image: data.data.sprites.front_default
        }
        response.send ({error: false, code: 200, res})
    } 
    catch(error){
        console.log(error)
        response.send({error:true, code: 400})
    }
}



// function updateBook_byId(req, res) {
//     let response;
//     let book = books.find((book) => book.id == req.query.id);
//     if (book){
//       book = {
//         ...book,
//         ...req.body ?? {}
//       }
//       response = { error: false, code: 200, message: 'Libro modificado correctamente', book}
//     } else {
//       response = { error: true, code: 200, message: 'El libro no existe' }
//     }
//     books = books.map((b) => b.id === book.id ? book : b);
//     response.books = books;
//     res.send(response)
//   }

// function deleteBook_byId(req, res) {
//     let response;
//     let book = books.find((book) => book.id == req.query.id);
//     if (book) {
//       books = books.filter((book) => book.id != req.query.id);
//       response = { error: false, code: 200, message: 'libro eliminado correctamente', books}
  
//     } else {
//       response = { error: true, code: 200, message: 'el libro no existe', book }
//     }
//     res.send(response)
//   }
  

module.exports = { getPokemon}