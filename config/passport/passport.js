const bcrypt = require("bcrypt");

const BCRYPT_SALT_ROUNDS = 10;

const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;
const GoogleStrategy = require("passport-google-oauth20").Strategy;
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

passport.use(
  "google",
  new GoogleStrategy({
    clientID: process.env.GCLIENT_ID,
    clientSecret: process.env.GCLIENT_SECRET,
    callbackURL: "/auth/google/callback",
    proxy: true
  },
  (accessToken, refreshToken, profile, done) => {
    db.User.findOne({ where: { google: profile.id} }).then(user => {
      if(user)
        return done(null, user);
      else {
        db.User.create({
          username: profile.displayName,
          firstName: profile.name.givenName,
          lastName: profile.name.familyName,
          google: profile.id,
          email: profile.emails[0].value
        }).then(newUser => {
          return done(null, newUser);
        });
      }
    });
  })
);