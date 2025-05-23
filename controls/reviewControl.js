const Review = require('../models/review');
const Book = require('../models/Book');

exports.addReview = async (req, res) => {
    try {
        const bookId = req.params.id;
        const userId = req.user.id;
        const { rating, comment } = req.body;

        const book = await Book.findById(bookId);
        if (!book) return res.status(404).send("Book not found");

        const existingReview = await Review.findOne({ bookId, userId });
        if (existingReview) return res.status(400).send("You have already reviewed this book");

        const review = new Review({
            bookId,
            userId,
            rating,
            comment
        });

        await review.save();

        res.status(201).json({ message: "Review added", review });
    } catch (err) {
        console.error(err);
        res.status(500).send("Server error");
    }
};

exports.updateReview = async (req, res) => {
    try {
        const reviewId = req.params.id;
        const userId = req.user.id;
        const { rating, comment } = req.body;

        const review = await Review.findById(reviewId);
        if (!review) return res.status(404).send("Review not found");

        if (review.userId.toString() !== userId) {
            return res.status(403).send("You can only update your own review");
        }

        if (rating !== undefined) review.rating = rating;
        if (comment !== undefined) review.comment = comment;

        await review.save();
        res.json({ message: "Review updated", review });
    } catch (err) {
        res.status(500).send("Server error");
    }
};

exports.deleteReview = async (req, res) => {
    try {
        const reviewId = req.params.id;
        const userId = req.user.id;

        const review = await Review.findById(reviewId);
        if (!review) return res.status(404).send("Review not found");

        if (review.userId.toString() !== userId) {
            return res.status(403).send("You can only delete your own review");
        }

        await review.deleteOne();
        res.json({ message: "Review deleted" });
    } catch (err) {
        res.status(500).send("Server error");
    }
};
