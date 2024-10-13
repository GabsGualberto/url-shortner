const jwt = require('jsonwebtoken');

const optionalAuth = (req, res, next) => {
    const token = req.header("Authorization");

    if(!token) return next();

    try{
        const decoded = jwt.verify(token.split(" ")[1], 'secretKey');
        req.user  = decoded;
        next();
    }catch(error){
        return res.status(400).json({error: 'Invalid token'});
    }

};

module.exports = optionalAuth;