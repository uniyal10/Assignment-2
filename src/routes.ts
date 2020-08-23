import { Router } from "express"
import { createTodo, getData, updateTodo, deleteTodo } from "./controllers/todos"

const router = Router()

router.post("/", createTodo)

router.get("/", getData)

router.patch("/:id", updateTodo)

router.delete("/:id", deleteTodo)

export default router
