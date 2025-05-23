const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const authRoutes = require('./routes/authRoutes')
const bookRoutes = require('./routes/bookRoutes')
const reviewRoutes = require('./routes/reviewRoutes');

dotenv.config();

const app = express();
app.use(express.json());

mongoose.connect(process.env.MONGOURI)
    .then(() => console.log("MongoDB connected!"))
    .catch(err => console.log(err));

app.use('/api', authRoutes);
app.use('/api', bookRoutes);
app.use('/api', reviewRoutes);

app.listen(process.env.PORT, () => {
    console.log('Server is running on PORT :', process.env.PORT);
});