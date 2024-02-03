const { Router} = require ('express');
const router = Router();
const bookController = require ('../controller/book.controller')



router.get ('/', bookController.wellcome);
router.get ('/book', bookController.getBook);
router.post ('/book', bookController.createBook);
router.put ('/book', bookController.updateBook);
router.delete ('/book', bookController.deleteBook);


module.exports = router;