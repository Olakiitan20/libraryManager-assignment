const express = require('express');
const router = express.Router();
const bookController = require('../controller/bookController');


router.post('/book', bookController.createBook);
router.post('/book/:id/borrow', bookController.borrowBook);
router.post('/book/:id/return', bookController.returnBook);
router.get('/allbooks', bookController.getAllBooks);
router.get('/book/:id', bookController.getBook);
router.put('/book/:id', bookController.updateBook);
router.delete('/book/:id', bookController.deleteBook);




module.exports = router;