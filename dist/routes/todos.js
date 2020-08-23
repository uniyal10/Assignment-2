"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const router = express_1.default();
router.post("/", (req, res) => {
    console.log(req.body);
    res.send("ook");
});
router.get("/", (req, res) => {
    res.send("hello");
});
router.patch("/:id");
router.delete("/:id");
exports.default = router;
