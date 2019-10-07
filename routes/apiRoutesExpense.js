// *********************************************************************************
// api-routes.js - this file offers a set of routes for displaying and saving data to the db
// *********************************************************************************

// Dependencies
// =============================================================

// Requiring our Todo model
let db = require("../models");
const jwtVerifier = require("../config/passport/jwt");
const multer = require("multer");
const AWS = require("aws-sdk");

const upload = multer();

const s3 = new AWS.S3({
  accessKeyId: process.env.AWS_ACCESS_KEY,
  secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
  signatureVersion: 'v4',
  region: "us-east-2"
});

const S3_BUCKET = process.env.BUCKET;

// Routes
// =============================================================
module.exports = function(app) {

  // GET route for getting all of the expenses
  app.get("/api/expense/", jwtVerifier.confirmToken, jwtVerifier.verifyToken, function(req, res) {
    db.Category.findAll({
      include: [
      { model: db.Expense, required: false, where: { UserId: req.userId }}
   ]})
      .then(function(dbExpense) {

        // replace key with boolean that says it exists
        dbExpense.forEach(function(item) {
          item.Expenses.forEach(function(expense){
            if(expense.img){
              expense.img = true;
            }
            else
              expense.img = false;
          });
        });

        res.json(dbExpense);
      });
  });

  // POST route for saving a new expense
  app.post("/api/expense", jwtVerifier.confirmToken, jwtVerifier.verifyToken, function(req, res) {
    console.log(req.body);
    db.Expense.create({
      date: req.body.date,
      amount: req.body.amount,
      name: req.body.name,
      UserId: req.userId,
      CategoryId: req.body.categoryId
    })
      .then(function(dbExpense) {
        res.json(dbExpense);
      });
  });

  // DELETE route for deleting expenses
  app.delete("/api/expense/:id", jwtVerifier.confirmToken, jwtVerifier.verifyToken, function(req, res) {
    db.Expense.destroy({
      where: {
        id: req.params.id,
        UserId: req.userId
      }
    })
      .then(function(dbExpense) {
        res.json(dbExpense);
      });
  });

  // GET route for getting images
  app.get("/api/expense/:id/image", jwtVerifier.confirmToken, jwtVerifier.verifyToken, function(req, res) {
    db.Expense.findOne({
      where: {
        id: req.params.id,
        UserId: req.userId
      }
    }).then(function(dbExpense){
      if(dbExpense && dbExpense.img){
        s3.getSignedUrl("getObject", {Bucket: S3_BUCKET, Key: dbExpense.img, Expires: 60 * 3}, function(err, result){
          if(err){
            console.log(err);
            return res.status(500).end();
          }

          res.json(result);
        });
      }
      else {
        return res.status(404).end();
      }
    }).catch(function(err) {
      console.log(err);
      return res.status(500).end();
    });
  });

  // POST route for adding images
  app.post("/api/expense/:id/image", jwtVerifier.confirmToken, jwtVerifier.verifyToken, upload.single("image"), function(req, res) {
    db.Expense.findOne({
      where: {
        id: req.params.id,
        UserId: req.userId
      }
    })
      .then(function(dbExpense){
        if(dbExpense){
          let key = "user" + req.userId + "/expense" + dbExpense.id + "." + req.file.mimetype.split("/")[1];

          s3.upload({
            Bucket: S3_BUCKET,
            Key: key,
            Body: req.file.buffer
          },
          function(err, result){
            if(err){
              console.log(err);
              return res.status(500).json(false);
            }

            db.Expense.update({ img: key }, { where: { id: dbExpense.id}} ).then(function() {
              res.status(200).json(true);
            }).catch(function(err){
              res.status(500).json(false);
            });

          });
        }
        else{
          res.status(404).end();
        }
      })
  });

};
