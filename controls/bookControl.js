const Book = require('../models/Book');
const Review = require('../models/review');

// API logics to handle books
exports.addBook = async (req, res) => {
    try {
        const { title, author, genre } = req.body;

        if (!title || !author || !genre) {
            return res.status(400).send("All fields (title, author, genre) are required.");
        }

        const newBook = new Book({ title, author, genre });
        await newBook.save();

        res.status(201).json({ message: "Book added successfully", book: newBook });
    } catch (err) {
        res.status(500).send("Server error");
    }
};

exports.getBook = async (req, res) => {
    try {
        const { author, genre, page = 1, limit = 10 } = req.query;
        const filter = {};
        if (author) filter.author = new RegExp(author, 'i');
        if (genre) filter.genre = genre;

        const books = await Book.find(filter)
            .then((page - 1) * limit)
            .limit(Number(limit));

        const total = await Book.countDocuments(filter);

        res.json({
            total, page: Number(page), limit: Number(limit), books
        });
    } catch (err) {
        res.status(500).send("Server error!");
    }
}

exports.getBookById = async (req, res) => {
    try {
        const bookId = req.params.id;
        const { page = 1, limit = 5 } = req.query;

        const book = await Book.findById(bookId);
        if (!book) return res.status(404).send("Book not found");

        // Get reviews for the book
        const reviews = await Review.find({ bookId })
            .populate('userId', 'email')
            .skip((page - 1) * limit)
            .limit(Number(limit));

        const totalReviews = await Review.countDocuments({ bookId });

        const ratingData = await Review.aggregate([
            { $match: { bookId: book._id } },
            { $group: { _id: '$bookId', avgRating: { $avg: '$rating' } } }
        ]);
        const averageRating = ratingData[0]?.avgRating || 0;

        res.json({
            book,
            averageRating: averageRating.toFixed(2),
            reviews,
            totalReviews,
            page: Number(page),
            limit: Number(limit)
        });
    } catch (err) {
        res.status(500).send("Server error");
    }
};

exports.searchBooks = async (req, res) => {
    try {
        const { query } = req.query;

        if (!query) return res.status(400).send("Search query is required");

        const books = await Book.find({
            $or: [
                { title: { $regex: query, $options: 'i' } },
                { author: { $regex: query, $options: 'i' } }
            ]
        });

        res.json({ total: books.length, books });
    } catch (err) {
        console.error(err);
        res.status(500).send("Server error");
    }
};
