const jwt = require('jsonwebtoken')
const dotenv = require("dotenv");
dotenv.config();

module.exports = function (req, res, next) {
    try {
        const token = req.header('Authorization').split(' ')[1]
        if (!token) {
            return res.status(403).json({message: "Token not valid"})
        }
        const decodedData = jwt.verify(token, process.env.JWT_SECRET)
        req.user = decodedData
        next()
    } catch (e) {
        console.log(e)
        return res.status(403).json({message: "Token not valid"})
    }
};
