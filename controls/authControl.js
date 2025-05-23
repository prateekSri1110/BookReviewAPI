const User = require('../models/User');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

exports.signup = async (req, res) => {
    const user = new User(req.body);
    await user.save();
    res.status(201).send('User registered');
};

exports.login = async (req, res) => {
    const user = await User.findOne({ email: req.body.email });
    if (!user || !(await bcrypt.compare(user.password, req.body.password))) {
        return res.status(404).send("Invalid Credentials");
    }
    const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET);
    res.send({ token });
}