import mysql from "mysql2/promise"

// Database Connection
export const pool = mysql.createPool(
  'mysql://v2t3gqjsihqtvxi4x1jk:pscale_pw_lUaTvSb7GipRLmD507oqVGHzfIoe3XGFv6cjf9utzai@aws.connect.psdb.cloud/collegesystem?ssl={"rejectUnauthorized":true}'
)
import { findMany, findOne } from "./_read.js"
import { createOne } from "./_create.js"
import { deleteOne } from "./_delete.js"
import { updateOne } from "./_update.js"

const db = { findMany, findOne, createOne, updateOne, deleteOne }

export default db
