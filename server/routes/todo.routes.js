const express = require('express');
const router = express.Router();
const { addTodo, updateTodo, getTodoById, getTodos} = require('../controllers/todo.controller');

router.post('/add', addTodo);
router.post('/update/:id', updateTodo);
router.get('/all', getTodos);
router.get('/:id', getTodoById)

module.exports = router;