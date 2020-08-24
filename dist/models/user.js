"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
const db_1 = __importDefault(require("../db"));
class User {
    constructor(id, firstName, middleName, lastName, email, phoneNumber, role, address) {
        this.id = id;
        this.firstName = firstName;
        this.middleName = middleName;
        this.lastName = lastName;
        this.email = email;
        this.phoneNumber = phoneNumber;
        this.role = role;
        this.address = address;
    }
    static getAllUsers() {
        return new Promise((resolve, reject) => {
            db_1.default.query("SELECT * FROM  users", (err, data) => {
                if (err)
                    reject(err);
                else {
                    resolve(data);
                }
            });
        });
    }
}
exports.User = User;
