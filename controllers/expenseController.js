let express = require("express");
let router = express.Router();
let Category = require('../models/category.js');


router.get('/', function(req,res){
  category.selectAll(function(category_data){
    console.log(category_data);
    res.render({category_data});
  });
});

// // Updates
// router.put('//updateSetWhere', function(req,res){
//   burger.updateSetWhere(req.body.burger_id, function(result){
//     console.log(result);
//     res.redirect('/');
//   });
// });

// // Adds
// router.post('//insertIntoValues', function(req,res){
//   burger.insertIntoValues(req.body.burger_name, function(result){
//     console.log(result);
//     res.redirect('/');
//   });
// });

// Export
module.exports = router;
  