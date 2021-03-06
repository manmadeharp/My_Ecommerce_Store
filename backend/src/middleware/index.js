const jwt = require('jsonwebtoken')

exports.requireSignin = (req, res, next) => {
    if (req.headers.authorization) {
        const token = req.headers.authorization.split(" ")[1];
        const user = jwt.verify(token, 'secret');
        req.user = user;
    } else {
        return res.status(500).json({ message: "Authorization required" })
    }
    next();

    //jwt.decode()
}

exports.userMiddleware = (req, res, next) => {
    if (req.user.role !== 'user') {
        return res.status(400).json({ message: 'Access denied' })
    }
    next();
}

exports.adminMiddleware = (req, res, next) => {
    if (req.user.role !== 'admin') {
        return res.status(400).json({ message: 'ADMIN Access denied' })
    }
    next();
}