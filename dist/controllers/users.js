"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteUser = exports.updateUser = exports.getData = exports.createTodo = void 0;
const user_1 = require("../models/user");
exports.createTodo = (req, res, next) => {
    // const text = req.body.text
    // const newTodo = new User(Math.random().toString(), text)
    // USERS.push(newTodo)
    // res.status(201).json({ message: "Created the todo.", createedTodo: newTodo })
};
exports.getData = (req, res) => {
    // res.json(USERS)
    user_1.User.getAllUsers()
        .then(data => {
        res.json(data);
    })
        .catch(err => {
        res.json(err);
    });
};
exports.updateUser = (req, res) => {
    // console.log(req.body)
    // const userId = req.params.id
    // const firstName = req.body.firstName
    // const middleName = req.body.middleName
    // const lastName = req.body.lastName
    // const email = req.body.email
    // const phoneNumber = req.body.phoneNumber
    // const role = req.body.role
    // const address = req.body.address
    // const userIndex = USERS.findIndex(todo => todo.id === userId)
    // if (userIndex < 0) {
    //   throw new Error("could not find user!")
    // }
    // USERS[userIndex] = new User(USERS[userIndex].id, firstName, middleName, lastName, email, phoneNumber, role, address)
    // res.json({ message: "updated", updatedTodo: USERS[userIndex] })
};
exports.deleteUser = (req, res) => {
    // const userId = req.params.id
    // const userIndex = USERS.findIndex(todo => todo.id === userId)
    // if (userIndex < 0) {
    //   throw new Error("could not find user!")
    // }
    // USERS.splice(userIndex, 1)
    // res.send({ message: "user deleted" })
};
