const bcrypt = require("bcrypt");

const BCRYPT_SALT_ROUNDS = 10;

const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;
const db = require("../../models");

passport.use(
  "register",
  new LocalStrategy({
    username: "username",
    password: "password",
    passReqToCallback: true,
    session: false
  },
  (req, username, password, done) => {
    try{
      db.User.findOne({ where: {username: username}}).then(user => {
        if(user != null)
          return done(null, false, { message: "username taken"});
        
        bcrypt.hash(password, BCRYPT_SALT_ROUNDS).then(hash =>{
          db.User.create({
            username: username,
            password: hash,
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            email: req.body.email,
            address: req.body.address
          }).then(user => {
            return done(null, user);
          });
        });
      });
    } catch(err) {
      return done(err);
    }
  })
);

passport.use(
  "login",
  new LocalStrategy({
    username: "username",
    password: "password",
    session: false
  },
  (username, password, done) => {
    db.User.findOne({ where: {username: username}}).then(user => {
      if(user === null)
        return done(null, false, { message: "Incorrect username or password"});

      bcrypt.compare(password, user.password).then(result => {
        if(result !== true)
          return done(null, false, { message: "Incorrect username or password"});

        return done(null, user);
      });
    });
  })
);