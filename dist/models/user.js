"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
const db_1 = __importDefault(require("../db"));
const fs_1 = __importDefault(require("fs"));
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
    static getAllUsers(callback) {
        db_1.default.query("SELECT * FROM  users", (err, data) => {
            if (err)
                throw Error('something wrong');
            else {
                callback(data.rows);
            }
        });
    }
    static updateUser(req) {
        return new Promise((resolve, reject) => {
            const userId = req.params.id;
            const firstName = req.body.firstName;
            const middleName = req.body.middleName;
            const lastName = req.body.lastName;
            const email = req.body.email;
            const phoneNumber = req.body.phoneNumber;
            const role = req.body.role;
            const address = req.body.address;
            const QUERY = `update users set firstName='${firstName}',lastName = '${lastName}',middleName = '${middleName}',email='${email}',phoneNumber='${phoneNumber}',role='${role}',address = '${address}' where id = '${userId}'`;
            db_1.default.query(QUERY, (err, data) => {
                if (err)
                    reject("something wrong");
                else {
                    resolve("user updated");
                }
            });
        });
    }
    static deleteUser(req) {
        return new Promise((resolve, reject) => {
            const userId = req.params.id;
            const QUERY = `DELETE FROM users WHERE id='${userId}'`;
            db_1.default.query(QUERY, function (err, data) {
                if (err)
                    reject("something wrong");
                else {
                    resolve('user deleted sucessfully');
                }
            });
        });
    }
    static loadData() {
        return new Promise((resolve, reject) => {
            let data = fs_1.default.readFileSync('./data.json', 'utf-8');
            let dataObj = JSON.parse(data);
            console.log(dataObj);
            dataObj.map(async function (user) {
                await db_1.default.query(`insert into users values(${user.id},'${user.firstName}','${user.middleName}','${user.lastName}','${user.email}','${user.phoneNumber}','${user.role}','${user.address}')`, function (err, data) {
                    if (err) {
                        reject('something wrong in inserting data into database');
                    }
                });
            });
            resolve("data loaded sucessfully");
        });
    }
}
exports.User = User;
