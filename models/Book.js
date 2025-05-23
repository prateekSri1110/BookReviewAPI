const mongoose = require('mongoose');

// review DB schema
const reviewSchema = new mongoose.Schema({
    userId: mongoose.Schema.Types.ObjectId,
    rating: Number,
    comment: String
}, { timestamps: true });

// DB book schema and review relations
const bookSchema = new mongoose.Schema({
    title: String,
    author: String,
    genre: String,
    reviews: [reviewSchema]
});

module.exports = mongoose.model('Book', bookSchema);
