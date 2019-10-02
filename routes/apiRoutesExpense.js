// *********************************************************************************
// api-routes.js - this file offers a set of routes for displaying and saving data to the db
// *********************************************************************************

// Dependencies
// =============================================================

// Requiring our Todo model
let db = require("../models");
const jwtVerifier = require("../config/passport/jwt");

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

};
