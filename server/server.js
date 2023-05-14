import express from "express"
import bodyParser from "body-parser"
import cors from "cors"
import dotenv from "dotenv"
import mysql from "mysql2"

dotenv.config() // to get the secret info. from .env file

// DataBase Connection
const connectionURL = process.env.DATABASE_URL || ""
const connection = mysql.createConnection(connectionURL)
connection.connect()
export default connection

// import Routes
import studentsRouter from "./routes/students.js"
import professorsRouter from "./routes/professors.js"
import coursesRouter from "./routes/courses.js"
import studentData from "./routes/studentsData.js"
import studentCourses from "./routes/studentCourses.js"
import userpasswords from  "./routes/passwords.js"
import dashboardRouter from "./routes/dashbord.js"

const app = express()

// Middleware Configuration
app.use(express.json()) // to make the app able to receive json files
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
app.use(cors()) // to get req.body from one site only

// Routes
app.use("/api/students", studentsRouter)
app.use("/api/students/ssn", studentsRouter)
app.use("/api/professors", professorsRouter)
app.use("/api/professors/ssn", studentsRouter)
app.use("/api/courses", coursesRouter)
app.use("/api/studentData", studentData)
app.use("/api/studentCourses", studentCourses)
app.use("/passwords", userpasswords)
app.use("/api/dashbord", dashboardRouter)

const PORT = process.env.PORT || 3000
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`)
})
