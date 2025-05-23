const mongoose = require('mongoose');


const reviewSchema = new mongoose.Schema({
    userId: mongoose.Schema.Types.ObjectId,
    rating: Number,
    comment: String
}, { timestamps: true });

const bookSchema = new mongoose.Schema({
    title: String,
    author: String,
    genre: String,
    reviews: [reviewSchema]
});

module.exports = mongoose.model('Book', bookSchema);
