const { Router} = require ('express');
const router = Router();
const bookController = require ('../controller/books.controller')


router.get ('/booksByQuery', bookController.getBookById);
router.get ('/books', bookController.getBooks);
router.post ('/books', bookController.createBook);
router.put ('/booksByQuery', bookController.updateBook_byId);
router.delete ('/booksByQuery', bookController.deleteBook_byId);


module.exports = router;