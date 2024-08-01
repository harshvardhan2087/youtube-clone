import jwt from 'jsonwebtoken';
import { createError } from './error.js';

export const verifyToken = (req, res, next) => {
    const Token  = req.cookies.access_token;
    if(!Token) return next(createError(401, "YOU ARE NOT AUTHENTICATE"));

    jwt.verify(Token, process.env.JWT, (err, user) => {
        if(err) return next(createError(403, "THE TOKEN IS NOT VALID"));
        req.user = user;
        next();
    })
}