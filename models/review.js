const mongoose = require('mongoose');

// book reviews DB schema
const reviewSchema = new mongoose.Schema({
    bookId: { type: mongoose.Schema.Types.ObjectId, ref: 'Book', required: true },
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    rating: { type: Number, min: 1, max: 5, required: true },
    comment: String
}, { timestamps: true });

module.exports = mongoose.model('review', reviewSchema);
