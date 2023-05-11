import mysql from "mysql2/promise"

// Database Connection
export const pool = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "",
  database: "college-management-system",
})

import { findMany, findOne } from "./_read.js"
import { createOne } from "./_create.js"
import { deleteOne } from "./_delete.js"
import { updateOne } from "./_update.js"

const db = { findMany, findOne, createOne, updateOne, deleteOne }

export default db
