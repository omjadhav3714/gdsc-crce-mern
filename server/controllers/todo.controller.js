const Todo = require("../models/todo.model");

exports.addTodo = async (req, res) => {
    try {
        const todo = await new Todo(req.body).save();
        res.json(todo)
    }
    catch (err) {
        res.status(400).json({
            error: err
        })
        console.log(err);
    }
}

exports.getTodos = (req, res) =>{
    try {
        Todo.find().exec((err, data) => {
            res.json(data)
        })
    } catch (error) {
        res.status(400).json({
            error: err
        })
    }
}

exports.getTodoById = (req, res) => {
    try {
        const id = req.params.id;
        Todo.findById(id, (err, data) => {
            res.json(data);
        })
    } catch (error) {
        res.status(400).json({
            error: err
        })
    }
}

exports.updateTodo = (req, res) => {
    try {
        Todo.findById(req.params.id, (err, data) => {
            if(!data){
                res.status(400).send('Data not found')
            } else{
                data.title = req.body.title;
                data.description = req.body.description;
                data.save().then(data => {
                    res.json('Todo updated')
                })
                .catch(err => {
                    res.status(400).send('Update not possible')
                })
            }
        })
    } catch (error) {
        res.status(400).json({
            error: err
        })
    }
}