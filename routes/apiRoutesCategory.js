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

  // GET route for getting all of the categories
  app.get("/api/category/", function(req, res) {
    db.Category.findAll({})
      .then(function(dbCategory) {
        res.json(dbCategory);
      });
  });

  // Get route for returning posts of a specific category
  app.get("/api/category/name/:name", function(req, res) {
    db.Post.findAll({
      where: {
        name: req.params.name
      }
    })
      .then(function(dbCategory) {
        res.json(dbCategory);
      });
  });

  // Get route for retrieving a single category
  app.get("/api/category/:id", function(req, res) {
    db.Category.findOne({
      where: {
        id: req.params.id
      }
    })
      .then(function(dbCategory) {
        res.json(dbCategory);
      });
  });

  // POST route for saving a new category
  app.post("/api/category", function(req, res) {
    console.log(req.body);
    db.Category.create({
      name: req.body.name,
      description: req.body.description,
    //   category: req.body.category
    })
      .then(function(dbCategory) {
        res.json(dbCategory);
      });
  });

  // DELETE route for deleting categories
  app.delete("/api/category/:id", function(req, res) {
    db.Category.destroy({
      where: {
        id: req.params.id
      }
    })
      .then(function(dbCategory) {
        res.json(dbCategory);
      });
  });

  // PUT route for updating categories
  app.put("/api/category", function(req, res) {
    db.Post.update(req.body,
      {
        where: {
          id: req.body.id
        }
      })
      .then(function(dbCategory) {
        res.json(dbCategory);
      });
  });
};
