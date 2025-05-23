const jwt = require('jsonwebtoken');

module.exports = (req, res, next) => {
    const token = req.headers.authorization?.split(' ')[1];
    if (!token) return res.status(401).send('Access denied');

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECURITY_KEY);
        req.userId = decoded.userId;
        next();
    } catch {
        res.status(401).send('Invalid token');
    }
};
