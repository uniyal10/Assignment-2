"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteUser = exports.updateUser = exports.getData = exports.createTodo = void 0;
const user_1 = require("../models/user");
const fs_1 = __importDefault(require("fs"));
const USERS = [];
fs_1.default.readFile("C:/Users/Sudhanshu/Desktop/typescript backend/src/controllers/data.json", (err, data) => {
    if (err)
        console.log(err);
    const d = JSON.parse(data.toString());
    for (let i = 0; i < d.length; i++) {
        USERS.push(d[i]);
    }
});
exports.createTodo = (req, res, next) => {
    // const text = req.body.text
    // const newTodo = new User(Math.random().toString(), text)
    // USERS.push(newTodo)
    // res.status(201).json({ message: "Created the todo.", createedTodo: newTodo })
};
exports.getData = (req, res) => {
    res.json(USERS);
};
exports.updateUser = (req, res) => {
    console.log(req.body);
    const userId = req.params.id;
    const firstName = req.body.firstName;
    const middleName = req.body.middleName;
    const lastName = req.body.lastName;
    const email = req.body.email;
    const phoneNumber = req.body.phoneNumber;
    const role = req.body.role;
    const address = req.body.address;
    const userIndex = USERS.findIndex(todo => todo.id === userId);
    if (userIndex < 0) {
        throw new Error("could not find user!");
    }
    USERS[userIndex] = new user_1.User(USERS[userIndex].id, firstName, middleName, lastName, email, phoneNumber, role, address);
    res.json({ message: "updated", updatedTodo: USERS[userIndex] });
};
exports.deleteUser = (req, res) => {
    const userId = req.params.id;
    const userIndex = USERS.findIndex(todo => todo.id === userId);
    if (userIndex < 0) {
        throw new Error("could not find user!");
    }
    USERS.splice(userIndex, 1);
    res.send({ message: "user deleted" });
};
