import mysql from "mysql2/promise"

// Database Connection
export const pool = mysql.createPool(
  'mysql://9as8nx5c3ebu7ql3u4ix:pscale_pw_MVq7YVslwZiUEjjhBb8CvUgZwUX3iI0HSaX0URhstKz@aws.connect.psdb.cloud/collegesystem?ssl={"rejectUnauthorized":true}'
)
import { findMany, findOne } from "./_read.js"
import { createOne } from "./_create.js"
import { deleteOne } from "./_delete.js"
import { updateOne } from "./_update.js"

const db = { findMany, findOne, createOne, updateOne, deleteOne }

export default db
