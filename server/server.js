import express from "express"
import bodyParser from "body-parser"
import cors from "cors"
import dotenv from "dotenv";
import mysql from "mysql";

dotenv.config(); // to get the secret info. from .env file
const app = express();

// DataBase Connection
const connectionURL = process.env.DATABASE_URL || "";
const connection = mysql.createConnection(connectionURL);
connection.connect();
export default connection;

// import Routes
import studentsRouter from "./routes/students.js"
import studentData from "./routes/studentsData.js";
import studentCourses from "./routes/studentCourses.js";
// import studentsRouter from './routes/students'
// import studentsRouter from './routes/students'

// Middleware Configuration
app.use(express.json()) // to make the app able to receive json files
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
app.use(cors()) // to get req.body from one site only

// Routes

app.use("/api/students", studentsRouter)
app.use("/studentData", studentData);
app.use("/studentCourses", studentCourses);

const PORT = process.env.PORT || 3000
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`)
})
