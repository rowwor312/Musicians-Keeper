var express = require('express');
var router = express.Router();

// Require controller modules.
var category = require('../controllers/categoryController');
var expense = require('../controllers/expenseController');
var user = require('../controllers/userController');


/// EXPENSES' ROUTES ///

//Place Holder for Home Page Route//



/// EXPENSE ROUTES ///

// GET request for creating Expense. NOTE This must come before route for id (i.e. display expense).
router.get('/expense/create', expense_controller.expense_create_get);

// POST request for creating Expense.
router.post('/expense/create', expense_controller.expense_create_post);

// GET request to delete Expense.
router.get('/expense/:id/delete', expense_controller.expense_delete_get);

// POST request to delete Expense.
router.post('/expense/:id/delete', expense_controller.expense_delete_post);

// GET request to update Expense.
router.get('/expense/:id/update', expense_controller.expense_update_get);

// POST request to update Expense.
router.post('/expense/:id/update', expense_controller.expense_update_post);

// GET request for one Expense.
router.get('/expense/:id', expense_controller.expense_detail);

// GET request for list of all Expenses.
router.get('/expenses', expense_controller.expense_list);


/// CATEGORY ROUTES ///

/// USER ROUTES ///



module.exports = router;