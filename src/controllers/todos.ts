import { RequestHandler } from "express"
import { User } from "../models/todo"
import fs from "fs"

const USERS: User[] = []

fs.readFile("C:/Users/Sudhanshu/Desktop/typescript backend/src/controllers/data.json", (err, data) => {
  if (err) console.log(err)
  const d = JSON.parse(data.toString())
  for (let i = 0; i < d.length; i++) {
    USERS.push(d[i])
  }
  console.log(USERS)
})

export const createTodo: RequestHandler = (req, res, next) => {
  // const text = req.body.text
  // const newTodo = new User(Math.random().toString(), text)
  // USERS.push(newTodo)
  // res.status(201).json({ message: "Created the todo.", createedTodo: newTodo })
}

export const getData: RequestHandler = (req, res) => {
  res.json(USERS)
}

export const updateUser: RequestHandler<{ id: string }> = (req, res) => {
  const userId = req.params.id
  const firstName = req.body.firstName
  const middleName = req.body.middleName
  const lastName = req.body.lastName
  const email = req.body.email
  const phoneNumber = req.body.phoneNumber
  const role = req.body.role
  const address = req.body.address
  const userIndex = USERS.findIndex(todo => todo.id === userId)
  if (userIndex < 0) {
    throw new Error("could not find user!")
  }
  USERS[userIndex] = new User(USERS[userIndex].id, firstName, middleName, lastName, email, phoneNumber, role, address)
  res.json({ message: "updated", updatedTodo: USERS[userIndex] })
}

export const deleteUser: RequestHandler = (req, res) => {
  const userId = req.params.id
  const userIndex = USERS.findIndex(todo => todo.id === userId)
  if (userIndex < 0) {
    throw new Error("could not find user!")
  }
  USERS.splice(userIndex, 1)
  res.send({ message: "user deleted" })
}
