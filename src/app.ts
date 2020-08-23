import express, { Request, Response, NextFunction } from "express"
import { json } from "body-parser"
import todoRoutes from "./routes"

const app = express()

app.use(json())
app.use("/todo", todoRoutes)

app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  res.status(500).json({ message: err.message })
})

//routes

app.listen(8080)
