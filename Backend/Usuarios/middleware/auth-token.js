const jwt = require("jsonwebtoken");

const token_auth = (req, res, next) => {
    const token = req.body[0].token || req.headers["x-access-token"];

    if(!token) {
        //return res.send("token invalido/innexistente");
        console.log("token innexistente");
    }

    try{
        jwt.verify(token, process.env.JWT_SECRET);
        //const decoded = jwt.verify(token, process.env.JWT_SECRET);
        //req.body[0].idusers = decoded;
        
        console.log("token valido");
    }catch(err){
        //return res.send("token invalido");
        return res.send("token invalido");
    }
    return next();
};

module.exports = token_auth;