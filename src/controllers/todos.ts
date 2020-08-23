import { RequestHandler } from "express"
import { Todo } from "../models/todo"

const TODOS: Todo[] = []

export const createTodo: RequestHandler = (req, res, next) => {
  const text = req.body.text
  const newTodo = new Todo(Math.random().toString(), text)
  TODOS.push(newTodo)
  res.status(201).json({ message: "Created the todo.", createedTodo: newTodo })
}

export const getTodos: RequestHandler = (req, res) => {
  res.json({ todo: TODOS })
}

export const updateTodo: RequestHandler<{ id: string }> = (req, res) => {
  const todoId = req.params.id

  const updatedText = req.body.text

  const todoIndex = TODOS.findIndex(todo => todo.id === todoId)

  if (todoIndex < 0) {
    throw new Error("could not find todo!")
  }

  TODOS[todoIndex] = new Todo(TODOS[todoIndex].id, updatedText)

  res.json({ message: "updated", updatedTodo: TODOS[todoIndex] })
}

export const deleteTodo: RequestHandler = (req, res) => {
  const todoId = req.params.id

  const todoIndex = TODOS.findIndex(todo => todo.id === todoId)

  if (todoIndex < 0) {
    throw new Error("could not find todo!")
  }
  TODOS.splice(todoIndex, 1)

  res.send({ message: "todo deleted" })
}
