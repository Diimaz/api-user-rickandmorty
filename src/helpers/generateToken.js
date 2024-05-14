require('dotenv-safe').config();
const jwt = require('jsonwebtoken');

const tokenSign = async (user) => {
    return jwt.sign(
        {
            _id: user._id,
            rol: user.rol
        },
        process.env.JWT_SECRET, {
            expiresIn: "1h"
        }
    );
}

const verifyToken = async (token) => {
    try{
        return jwt.verify(token, process.env.JWT_SECRET)
    }catch (e){
        return undefined
    }
}

const decodeSign = async (token) => {
    return jwt.decode(token, null);
}

module.exports = {
    tokenSign,
    verifyToken,
    decodeSign
}