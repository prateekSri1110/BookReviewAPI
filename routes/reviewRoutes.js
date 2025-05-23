const express = require('express');
const router = express.Router();
const auth = require('../middleman/authentication');
const { updateReview, deleteReview } = require('../controls/reviewControl');

// review routes with authentication
router.put('/reviews/:id', auth, updateReview);
router.delete('/reviews/:id', auth, deleteReview);

module.exports = router;
