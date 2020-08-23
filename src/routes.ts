import { Router } from "express"
import { createTodo, getData, updateUser, deleteUser } from "./controllers/todos"

const router = Router()

router.post("/", createTodo)

router.get("/", getData)

router.patch("/:id", updateUser)

router.delete("/:id", deleteUser)

export default router
