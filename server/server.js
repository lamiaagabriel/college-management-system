import express from "express"
import bodyParser from "body-parser"
import cors from "cors"

// import Routes
import studentsRouter from "./routes/students.js"
import professorsRouter from "./routes/professors.js"
import coursesRouter from "./routes/courses.js"

const app = express()

// Middleware Configuration
app.use(express.json()) // to make the app able to receive json files
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
app.use(cors()) // to get req.body from one site only

// Routes
app.use("/api/students", studentsRouter)
app.use("/api/students/:id", studentsRouter)
app.use("/api/professors", professorsRouter)
app.use("/api/courses", coursesRouter)

const PORT = process.env.PORT || 3000
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`)
})
