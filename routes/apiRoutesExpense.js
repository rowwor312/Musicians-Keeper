// *********************************************************************************
// api-routes.js - this file offers a set of routes for displaying and saving data to the db
// *********************************************************************************

// Dependencies
// =============================================================

// Requiring our Todo model
var db = require("../models");

// Routes
// =============================================================
module.exports = function(app) {

  // GET route for getting all of the expenses
  app.get("/api/expense/", function(req, res) {
    db.Expense.findAll({})
      .then(function(dbExpense) {
        res.json(dbExpense);
      });
  });

  // Get route for returning posts of a specific expense
  app.get("/api/expense/name/:name", function(req, res) {
    db.Expense.findAll({
      where: {
        name: req.params.name
      }
    })
      .then(function(dbName) {
        res.json(dbName);
      });
  });

  // Get route for retrieving a single expense
  app.get("/api/expense/:id", function(req, res) {
    db.Expense.findOne({
      where: {
        id: req.params.id
      }
    })
      .then(function(dbExpense) {
        res.json(dbExpense);
      });
  });

  // POST route for saving a new expense
  app.post("/api/expense", function(req, res) {
    console.log(req.body);
    db.Expense.create({
      date: req.body.date,
      amount: req.body.amount,
      name: req.body.name
    })
      .then(function(dbExpense) {
        res.json(dbExpense);
      });
  });

  // DELETE route for deleting expenses
  app.delete("/api/expense/:id", function(req, res) {
    db.Post.destroy({
      where: {
        id: req.params.id
      }
    })
      .then(function(dbExpense) {
        res.json(dbExpense);
      });
  });

  // PUT route for updating posts
  app.put("/api/expense", function(req, res) {
    db.Expense.update(req.body,
      {
        where: {
          id: req.body.id
        }
      })
      .then(function(dbExpense) {
        res.json(dbExpense);
      });
  });
};
