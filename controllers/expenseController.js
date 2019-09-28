var Expense = require('../models/expense');

// Display list of all Expenses.
exports.expense_list = function(req, res) {
    res.send('Expense List');
};

// Display detail page for a specific Expense.
exports.expense_detail = function(req, res) {
    res.send('Expense Detail: ' + req.params.id);
};

// Display Expense create form on GET.
exports.expense_create_get = function(req, res) {
    res.send('Expense create GET');
};

// Handle Expense create on POST.
exports.expense_create_post = function(req, res) {
    res.send('Expense create POST');
};

// Display Expense delete form on GET.
exports.expense_delete_get = function(req, res) {
    res.send('Expense delete GET');
};

// Handle Expense delete on POST.
exports.expense_delete_post = function(req, res) {
    res.send('Expense delete POST');
};

// Display Expense update form on GET.
exports.expense_update_get = function(req, res) {
    res.send('Expense update GET');
};

// Handle Expense update on POST.
exports.expense_update_post = function(req, res) {
    res.send('Expense update POST');
};