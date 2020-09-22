"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const users_1 = require("./controllers/users");
const router = express_1.Router();
router.get("/load", users_1.loadData);
router.get("/", users_1.getData);
router.post("/:id", users_1.updateUser);
router.delete("/:id", users_1.deleteUser);
exports.default = router;
