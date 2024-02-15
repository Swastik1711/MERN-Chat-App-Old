const jwt = require("jsonwebtoken");
const { modelName } = require("../models/user.model");

const generateTokenAndSetCookie = (userId, res) => {
    const token = jwt.sign({ userId }, process.env.JWT_SECRET, {
        expiresIn: '15d'
    })

    res.cookie("jwt", token, {
        maxAge: 15 * 24 * 60 * 60 * 1000,//in milisec
        httpOnly: true, // prevent xss attacks
        sameSite: "strict", // CSRF attcks
        secure: process.env.NODE_ENV !== "development"
    });
};

module.exports = generateTokenAndSetCookie;