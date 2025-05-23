const express = require('express');
const { addBook, getBook } = require('../controls/bookControl');
const auth = require('../middleman/authentication');
const { getBookById, searchBooks } = require('../controls/bookControl');
const { addReview } = require('../controls/reviewControl');

const router = express.Router();

router.post('/addbooks', auth, addBook);
router.get('/getbooks', getBook);
router.post('/books/:id/reviews', auth, addReview);
router.get('/books/:id', getBookById);
router.get('/search', searchBooks);


module.exports = router;
