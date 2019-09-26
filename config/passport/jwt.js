const jwt = require("jsonwebtoken");
const jwtConfig = require("./jwtConfig");

module.exports = {
  confirmToken: (req, res, next) => {
    const bearerHeader = req.headers["authorization"];

    const bearer = bearerHeader.split(" ");

    const bearerToken = bearer[1];

    if(bearerToken !== "null"){
      req.token = bearerToken;

      next();
    }
    else {
      res.status(401).json({ message: "Token not provided"});
    }
  },
  verifyToken: (req, res, next) => {
    jwt.verify(req.token, jwtConfig.secret, (err, authData) => {
      if(err){
        res.status(403).json({ message: "Invalid token" });
      }
      else {
        req.userId = authData.id;
        next();
      }
    });
  }
};