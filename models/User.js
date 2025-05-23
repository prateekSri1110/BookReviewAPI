const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

// user DB schema
const userSchema = new mongoose.Schema({
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true }
})

// user's password encryption and converting to hexcode 64bits
userSchema.pre('save', async function () {
    this.password = await (bcrypt).hash(this.password, 10);
})

module.exports = mongoose.model('User', userSchema);