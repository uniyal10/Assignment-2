"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteTodo = exports.updateTodo = exports.getData = exports.createTodo = void 0;
const todo_1 = require("../models/todo");
const fs_1 = __importDefault(require("fs"));
const TODOS = [];
exports.createTodo = (req, res, next) => {
    const text = req.body.text;
    const newTodo = new todo_1.Todo(Math.random().toString(), text);
    TODOS.push(newTodo);
    res.status(201).json({ message: "Created the todo.", createedTodo: newTodo });
};
exports.getData = (req, res) => {
    fs_1.default.readFile("C:/Users/Sudhanshu/Desktop/typescript backend/src/controllers/data.json", (err, data) => {
        if (err)
            console.log(err);
        res.json(JSON.parse(data.toString()));
    });
};
exports.updateTodo = (req, res) => {
    const todoId = req.params.id;
    const updatedText = req.body.text;
    const todoIndex = TODOS.findIndex(todo => todo.id === todoId);
    if (todoIndex < 0) {
        throw new Error("could not find todo!");
    }
    TODOS[todoIndex] = new todo_1.Todo(TODOS[todoIndex].id, updatedText);
    res.json({ message: "updated", updatedTodo: TODOS[todoIndex] });
};
exports.deleteTodo = (req, res) => {
    const todoId = req.params.id;
    const todoIndex = TODOS.findIndex(todo => todo.id === todoId);
    if (todoIndex < 0) {
        throw new Error("could not find todo!");
    }
    TODOS.splice(todoIndex, 1);
    res.send({ message: "todo deleted" });
};
