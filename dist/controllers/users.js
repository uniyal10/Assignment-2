"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.loadData = exports.deleteUser = exports.updateUser = exports.getData = void 0;
const user_1 = require("../models/user");
// export const createTodo: RequestHandler = (req, res, next) => {
//   // const text = req.body.text
//   // const newTodo = new User(Math.random().toString(), text)
//   // USERS.push(newTodo)
//   // res.status(201).json({ message: "Created the todo.", createedTodo: newTodo })
// }
exports.getData = (req, res) => {
    // res.json(USERS)
    user_1.User.getAllUsers(function (data) {
        res.send(data);
    });
};
exports.updateUser = (req, res) => {
    user_1.User.updateUser(req).then((data) => { res.send(data); }).catch((err) => { res.send(err); });
};
exports.deleteUser = (req, res) => {
    user_1.User.deleteUser(req).then(data => res.send(data)).catch(err => res.send(err));
};
exports.loadData = function (req, res) {
    user_1.User.loadData().then(data => res.send(data)).catch(err => res.send(err));
};
