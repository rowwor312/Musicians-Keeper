const passport = require("passport");
const jwtConfig = require("../config/passport/jwtConfig");
const jwt = require("jsonwebtoken");
require("../config/passport/passport");

module.exports = {
  registerUser: (req, res, next) => {
    passport.authenticate("register", (err, user, info) =>{
      if(err){
        console.log("Error occured: " + err);
        res.status(500).send({ message: "Internal Server Error"});
      }
      if(info !== undefined){
        console.log(info.message);
        return res.status(403).send(info.message);
      }
      else
        res.status(201).send({ message: "Created" });
    })(req, res, next);
  },
  loginUser: (req, res, next) => {
    passport.authenticate("login", (err, user, info) => {
      if(err)
        console.log("Error occured: " + err);
      if(info !== undefined){
        console.log(info.message);
        res.status(401).send(info.message);
      }
      else {
        const token = jwt.sign({ id: user.id }, jwtConfig.secret, { expiresIn: 60 * 60 });
        res.status(200).send({
          auth: true,
          token,
          message: "Logged in"
        });
      }
    })(req, res, next);
  }
};
