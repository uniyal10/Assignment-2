"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createTodo = void 0;
var todo_1 = require("../models/todo");
var TODOS = [];
exports.createTodo = function (req, res, next) {
    console.log(req.body);
    var text = req.body;
    var newTodo = new todo_1.Todo(Math.random().toString(), text);
    TODOS.push(newTodo);
    res.status(201).json({ message: "Created the todo.", createedTodo: newTodo });
};
